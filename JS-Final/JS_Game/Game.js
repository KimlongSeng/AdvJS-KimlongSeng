var ctx = null;
var gameTime = 0, lastFrameTime = 0;
var currentSecond = 0, frameCount = 0, framesLastSecond = 0;
var offx = 0, offy = 0;
var grid = [];
var MS = {
	x	: 0,
	y	: 0,
	click	: null
};
var GS = {
	difficulty	: 'Little Lava',
	screen		: 'menu',
	timeTaken	: 0,
	
	tileW		: 20,
	tileH		: 20
};
var difficulties = {
	Little_Lava	: {
		name:"Little Lava",
		width:20,
		height:20,
		Lava:1,
		menuBox:[0,0]
	},
	Quite_A_Bit:{
		name:"Quite A Bit ",
		width:24,
		height:24,
		Lava:160,
		menuBox:[0,0]
	},
	Impossible:{
		name:"Impossible",
		width:30,
		height:30,
		Lava:400,
		menuBox:[0,0]
	}
};

function Tile(x, y)
{
	this.x=x;
	this.y=y;
	this.hasLava=false;
	this.danger=0;
	this.currentState='hidden';
}
Tile.prototype.calcDanger = function()
{
	var CD = difficulties[GS.difficulty];
	
	for(var py = this.y - 1; py <= this.y + 1; py++)
	{
		for(var px = this.x - 1; px <= this.x + 1; px++)
		{
			if(px==this.x && py==this.y) { continue; }
			if(px < 0 || py < 0 ||px >= CD.width ||py >= CD.height){continue;}
			if(grid[((py*CD.width)+px)].hasLava){this.danger++;}
		}
	} 
};
Tile.prototype.flag = function()
{
    if(this.currentState=='hidden') { this.currentState = 'flagged'; }
    else if(this.currentState=='flagged') { this.currentState = 'hidden'; }
};
Tile.prototype.click = function()
{
	if(this.currentState!='hidden') {return;}
	if(this.hasLava) {gameOver();}
	else if(this.danger>0) { this.currentState = 'visible';}
	else
	{
		this.currentState = 'visible';
		this.RN();
	}
	checkState();
};
Tile.prototype.RN = function()
{
	var CD = difficulties[GS.difficulty];
	for(var py = this.y - 1; py <= this.y + 1; py++)
	{
		for(var px = this.x - 1; px <= this.x + 1; px++)
		{
			if(px==this.x && py==this.y) { continue;}
				if(px < 0||py < 0||px >= CD.width||py >= CD.height){continue;}	
			var idx = ((py * CD.width) + px);
			
			if(grid[idx].currentState=='hidden')
			{
				grid[idx].currentState = 'visible';
				if(grid[idx].danger==0){grid[idx].RN();}
			}
		}
	}
};
function checkState()
{
	for(var i in grid)
	{
		if(grid[i].hasLava==false && grid[i].currentState!='visible'){return;}
	}
	var CD = difficulties[GS.difficulty];
	GS.screen = 'won';
}
function gameOver()
{
	GS.screen = 'lost';
}
function startLevel(diff)
{
	GS.timeTaken= 0;
	GS.difficulty= diff;
	GS.screen='playing';
	
	gameTime= 0;
	lastFrameTime= 0;
    grid.length= 0;
    
	var CD = difficulties[diff];
	offx = Math.floor((document.getElementById('game').width -
			(CD.width * GS.tileW)) / 2);
	offy = Math.floor((document.getElementById('game').height -
			(CD.height * GS.tileH)) / 2);
	for(var py = 0; py < CD.height; py++)
	{
		for(var px = 0; px < CD.width; px++)
		{
			var idx = ((py * CD.width) + px);
			grid.push(new Tile(px, py));
		}
	}
	
	var LavaPlaced = 0;
	
	while(LavaPlaced < CD.Lava)
	{
		var idx = Math.floor(Math.random() * grid.length);
		if(grid[idx].hasLava) { continue; }
		grid[idx].hasLava = true;
		LavaPlaced++;
	}
	for(var i in grid) { grid[i].calcDanger(); }
}

function updateGame()
{
	if(GS.screen=='menu')
	{
		if(MS.click!=null)
		{
			for(var i in difficulties)
			{
				if(MS.y >= difficulties[i].menuBox[0] &&MS.y <= difficulties[i].menuBox[1])
				{
					startLevel(i);
					break;
				}
			}
			MS.click = null;
		}
	}
	else if(GS.screen=='won' || GS.screen=='lost')
	{
		if(MS.click!=null)
		{
			GS.screen = 'menu';
			MS.click = null;
		}
	}
	else
	{
		if(MS.click!=null)
		{
			var CD = difficulties[GS.difficulty];
			if(MS.click[0]>=offx &&MS.click[1]>=offy &&MS.click[0]<(offx + (CD.width * GS.tileW))&&MS.click[1]<(offy + (CD.height * GS.tileH)))
			{
				var tile = [Math.floor((MS.click[0]-offx)/GS.tileW),Math.floor((MS.click[1]-offy)/GS.tileH)];
				if(MS.click[2]==1){grid[((tile[1] * CD.width) + tile[0])].click();}
				else{grid[((tile[1] * CD.width) + tile[0])].flag();}
			}
			else if(MS.click[1]>=380){GS.screen = 'menu';}
			MS.click = null;
		}
	}
}
window.onload = function()
{
	ctx = document.getElementById('game').getContext('2d');
	document.getElementById('game').addEventListener('click', function(e) {
		var pos = realPos(e.pageX, e.pageY);
		MS.click = [pos[0], pos[1], 1];
	});
	const BackBtn = document.querySelector('.Back');
	BackBtn.addEventListener('click', () => {
		window.location.href = "../Main.html"
	});
	document.getElementById('game').addEventListener('mousemove',
	function(e) {
		var pos = realPos(e.pageX, e.pageY);
		MS.x = pos[0];
		MS.y = pos[1];
	});
	
	document.getElementById('game').addEventListener('contextmenu',
	function(e) {
		e.preventDefault();
		var pos = realPos(e.pageX, e.pageY);
		MS.click = [pos[0], pos[1], 2];
		return false;
	});
	requestAnimationFrame(drawGame);
};

function drawMenu()
{
	ctx.textAlign = 'center';
	ctx.font = "bold 20pt sans-serif";
	ctx.fillStyle = "#800000";
	var y = 200;
	for(var d in difficulties)
	{
		var mouseOver = (MS.y>=(y-40) && MS.y<=(y+20));
		if(mouseOver) { ctx.fillStyle = "#000099"; }
		difficulties[d].menuBox = [y-40, y+20];
		ctx.fillText(difficulties[d].name, 300, y);
		y+= 160;
		if(mouseOver) { ctx.fillStyle = "#800000"; }
	}
	var y = 240;
	ctx.font = "italic 12pt sans-serif";
}

function drawPlaying()
{
	var halfW = GS.tileW / 2;
	var halfH = GS.tileH / 2;
	var CD = difficulties[GS.difficulty];
	ctx.textAlign = "center";
	ctx.textBaseline = "bottom";
	
	ctx.fillStyle = "#800000";
	ctx.font = "12px sans-serif";
	ctx.fillText(CD.name, 300, 40);
	
	ctx.fillText("Return to menu", 300, 780);
	
	if(GS.screen!='lost')
	{
		ctx.textAlign = "left";
		ctx.fillText("Lava: " + CD.Lava, 20, 80);
	}
	
	if(GS.screen=='lost' || GS.screen=='won')
	{
		ctx.textAlign = "center";
		ctx.font = "bold 20px sans-serif";
		ctx.fillText(
			(GS.screen=='lost' ?
				"Game Over" : "You Won!"), 300, offy - 30);
	}
	
	ctx.strokeStyle = "#999999";
	ctx.strokeRect(offx, offy,
		(CD.width * GS.tileW),
		(CD.height * GS.tileH));
	
	ctx.font = "bold 10px monospace";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	
	for(var i in grid)
	{
		var px = offx + (grid[i].x * GS.tileW);
		var py = offy + (grid[i].y * GS.tileH);
		
		if(GS.screen=='lost' && grid[i].hasLava)
		{
			ctx.fillStyle = "#cf6010";
			ctx.fillRect(px, py,
				GS.tileW, GS.tileH);
			ctx.fillStyle = "#000000";
			ctx.fillText("x", px + halfW, py + halfH);
		}
		else if(grid[i].currentState=='visible')
		{
			ctx.fillStyle = "#FFFFFF";
			if(grid[i].danger)
			{
				ctx.fillStyle = "#FFFFFF";
				ctx.fillText(grid[i].danger, px + halfW, py + halfH);
			}
		}
		else
		{
			ctx.fillStyle = "#cccccc";
			ctx.fillRect(px, py,GS.tileW, GS.tileH);
			ctx.strokeRect(px, py,GS.tileW, GS.tileH);
			if(grid[i].currentState=='flagged')
			{
				ctx.fillStyle = "#0000cc";
				ctx.fillText("P", px + halfW, py + halfH);
			}
		}
	}
}
function drawGame()
{
	if(ctx==null) { return; }
	var currentFrameTime = Date.now();
	if(lastFrameTime==0) { lastFrameTime = currentFrameTime; }
	var timeElapsed = currentFrameTime - lastFrameTime;
	gameTime+= timeElapsed;
    updateGame();
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, 600, 800);
	if(GS.screen=='menu') { drawMenu(); }
	else { drawPlaying(); }
	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}

function realPos(x, y)
{
	var p = document.getElementById('game');
	do {
		x-= p.offsetLeft;
		y-= p.offsetTop;
		p = p.offsetParent;
	} while(p!=null);
	return [x, y];
}
