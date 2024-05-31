/*wasd to move P1, Arrows to move P2
Shift for P2 to control box F for P1, stand next to it to control Up & Down, Left & Right can be controlled anywhere
E to interact as P1, . to interact as P2
*/
let player1,player2;
let box;
let floor,wall;
let door;
let ladder;
let portali,portalo;
let doorPress;
let ice,bounce;
let nxt = false;
let pressCount = 0;
let hinges, hinged, charge = true, charge1,power;
let no;
let a = [];
let i = 0;
let x = 0;
let run1,fall1,idle1,run2,fall2,idle2,pulse1,pulse2,block,icev1 = 30,icev2 = 30,rst = false, cam = true, sign;
let music, buttonRD,buttonRU,buttonBD,buttonBU,levL,levR;

function preload(){
	music = loadSound('assets/Untitled video - Made with Clipchamp (1).mp3')

	floor = new Group()
	floor.collider  = 's'
	floor.w = 50
	floor.h = 50
	floor.tile = '='
	floor.color = 'gray'
	floor.friction = 6

	pressure = new Group()
	pressure.collider = 'n'
	pressure.w = 50
	pressure.h = 50
	pressure.tile = 'p'


    ladder = new Group()
	ladder.collider = 'n'
	ladder.w = 50
	ladder.h = 50
	ladder.tile = 'l'
	ladder.color = color(77,38,0)

	door = new Group()
	door.collider = 'n'
	door.w = 50
	door.h = 50
	door.tile = 'd'
	door.color = 'pink'

	grav = new Group()
	grav.collider = 'n'
	grav.w = 50
	grav.h = 50
	grav.tile = 'g'
	grav.color = 'purple'
	

	gravX = new Group()
	gravX.collider = 'n'
	gravX.w = 50
	gravX.h = 50
	gravX.tile = 'x'
	gravX.color = 'magenta'

	power = new Group()
	power.collider = 'n'
	power.w = 50
	power.h = 50
	power.tile = '#'
	power.color = 'black'

	doorPress = new Group()
	doorPress.collider = 'n'
	doorPress.w = 50
    doorPress.h = 50
	doorPress.tile = 'y'
	doorPress.color = 'pink'

	doorPress1 = new Group()
	doorPress1.collider = 'n'
	doorPress1.w = 50
    doorPress1.h = 50
	doorPress1.tile = 's'
	doorPress1.color = 'orange'

    ice = new Group()
    ice.collider = 's'
	ice.w = 50
	ice.h = 50
    ice.tile = 'i'
	ice.color = 'teal'

    bounce = new Group()
	bounce.collider = 's'
	bounce.w = 50
	bounce.h = 50
	bounce.friction = 0
	bounce.tile = '^'
	bounce.color = 'white'
	a =[
		[
		'=============================================',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=======                                     =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                          d=',
		'=                        p       p         d=',
		'=============================================',],

	  [	'=============================================',
	    '=                                           =',
	    '=                                           =',
	    '=                                           =',
	    '=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=======                                    d=',
		'=                                     p    d=',
		'=                                 l==========',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                               ==          =',
		'=                               ==         p=',
		'=============================================',],

	  ['=============================================',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                                          d=',
	   '=                                          d=',
	   '=                               =============',
	   '=                                           =',
	   '=                                           =',
	   '=======                                     =',
	   '=                                           =',
	   '=                                           =',
	   '=                                  l=========',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                               ==          =',
	   '=                               ==          =',
	   '===================== p =====================',
	   '=============================================',],

	  ['=============================================',
	   '=                              p           d=',
	   '=                                          d=',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=======                                     =',
	   '= p                                         =',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                                           =',
	   '=                       g                   =',
	   '=============================================',],

	  ['=============================================',
	  '=                                           =',
	  '=                                           =',
	  '=                                           =',
	  '=                                           =',
	  '=                                           =',
	  '=                                           =',
	  '=                                           =',
	  '=                                           =',
	  '=======                                     =',
	  '=                                           =',
	  '=                                ============',
	  '=                                           =',
	  '=                                           =',
	  '=                                           =',
	  '=                                           =',
	  '=                                =          =',
	  '=                                =          =',
	  '=                                =          =',
	  '=                                =         d=',
	  '=                    #           =         d=',
	  '=============================================',],
	  
	  [	'=============================================',
	    '=                                           =',
	    '=                                           =',
	    '=                                          d=',
	    '=                                          d=',
		'=                                 ===========',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=      y                                    =',
		'============                                =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                                           =',
		'=                 y     p                  p=',
		'=============================================',],

	   ['=============================================',
	    '=                 =                         =',
	    '=                 =                         =',
	    '=                 =                         =',
	    '========          =                        p=',
		'=                 =               ===========',
		'=                 =                         =',
		'=                 =         =               =',
		'=                 =         =               =',
		'=                           =               =',
		'=                           =               =',
		'=         =========         =               =',
		'=                           =               =',
		'=                           =               =',
		'=                           =               =',
		'=                                           =',
		'=                                           =',
		'=                 ===========               =',
		'=                                          d=',
		'=                  g      x                d=',
		'=============================================',],

		['=============================================',
	    '=                      =                    =',
	    '=                      =                    =',
	    '=                      =                    =',
	    '========               =                    =',
		'=d     =               =          ===========',
		'=d     =      ==========                    =',
		'=      =      =      yp=                    =',
		'=      =      =        =                    =',
		'=      =      =        =                    =',
		'=      =      =        =                    =',
		'=             =        =                    =',
		'=             ==========                    =',
		'=                                           =',
		'========                                    =',
		'=                                           =',
		'=                                           =',
		'=                 ==========                =',
		'=                                          d=',
		'=                  g      x                d=',
		'=============================================',],

		['==================================================================================================================================',
	    '=                                                                                                                                 =',
	    '=                                                                                                                                 =',
	    '=                                                                                                                                 =',
	    '=                                                                                                                                p=',
		'=                                                                                                                             l====',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                d=',
		'=                                                                                                                                d=',
		'============iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii                                                                    ====',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                                                 =',
		'=                                                                                                          ^^^^^^                 =',
		'=                                                                                                                                 =',
		'===================================================================================================================================',],

		['=============================================',
	    '=   =                                       =',
	    '=   =                                       =',
	    '=   =                                       =',
	    '=   =                                       =',
		'=   =                                      d=',
		'= y =                                 s    d=',
		'=====                                ========',
		'=                                           =',
		'=                                           =',
		'=                     =   =                 =',
		'=                     =   =          =      =',
		'=                     = ps=          =      =',
		'=                     =====          =      =',
		'=                                    ========',
		'=                                    =      =',
		'=                                    =      =',
		'=                                    =      =',
		'=                                    =      =',
		'=                                    =      =',
		'=^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^=',
		'=============================================',]

]
	mapCurrent = new Tiles(a[i],
		floor.w/2,
		floor.h/2,
		50,50
)

idle1 = loadImage('assets/bootsIDLE-Sheet.png')
fall1 = loadImage('assets/bootsFALLJUMP.png')
run1 = loadImage('assets/bootsRUN.png')

idle2 = loadImage('assets/ShoesIDLE-Sheet.png')
fall2 = loadImage('assets/ShoesFALLJUMP-Sheet.png')
run2 = loadImage('assets/ShoesRUN-Sheet.png')

pulse1 = loadImage('assets/portal1-Sheet (1).png')
pulse2 = loadImage('assets/portal2-Sheet (1).png')
block = loadImage('assets/BLOCK.png')
buttonRD = loadImage('assets/ButtonDown.png')
buttonRU = loadImage('assets/ButtonUp.png')
buttonBD = loadImage('assets/BlueDown.png')
buttonBU = loadImage('assets/BlueUp.png')
no = loadImage('assets/DONTJUMPsign.png')
levL = loadImage('assets/levL.png')
levR = loadImage('assets/levR.png')
}

function setup() {
	new Canvas(2250,1080, 'fullscreen');
    world.gravity.y = 10
	world.gravity.x = 0
	grav.image = levL
	gravX.image = levL
	power.image = levL
	//Players
	player1 = new Sprite(150,390,80,80,'d');
    player1.color = 'blue'
	player1.friction = 7
	player1.w = 50
	player1.h = 80
	player1.bounciness = 0
	player1.rotationLock = true

	player2 = new Sprite(250,390,80,80,'d');
    player2.color = 'purple'
	player2.friction = 7
	player2.bounciness = 0
	player2.w = 50
	player2.h = 80
	player2.rotationLock = true

   player1.addAni('Idle1',idle1, {frameSize: [61,106], frames: 8, frameDelay: 3})
   player1.addAni('Fall1',fall1,{frameSize: [156,156],frames:4,frameDelay:2})
   player1.addAni('Run1',run1,{frameSize: [70,112],frames:6,frameDelay:3})
   player1.ani = 'Idle1'

   player2.addAni('Idle2',idle2, {frameSize: [61,106], frames: 8, frameDelay: 3})
   player2.addAni('Fall2',fall2,{frameSize: [156,156],frames:4,frameDelay:2})
   player2.addAni('Run2',run2,{frameSize: [70,112],frames:6,frameDelay:3})
   player2.ani = 'Idle2'

	//Box
	box = new Sprite(canvas.w/3,canvas.h/2,80,80,'d')
	box.friction = 7
	box.bounciness = 0
	box.rotationLock = true
box.addAni('Block',block,{frameSize: [90,90],frames:2,frameDelay:8})
box.ani = 'Block'
	// Portal
	portali = new Sprite()
	portali.collider = 'n'
	portali.w = 50
	portali.h = 50
	portali.x = -399
	portali.y = -399
	

	portalo = new Sprite()
	portalo.collider = 'n'
	portalo.w = 50
	portalo.h = 50
    portalo.x = -399
	portalo.y = -399
	
 portali.addAni('Pulse1',pulse1,{frameSize: [56,56], frames: 4, frameDelay: 4})
   portali.ani = 'Pulse1'
   
   portalo.addAni('Pulse2',pulse2,{frameSize: [56,56], frames: 4, frameDelay: 4})
   portalo.ani = 'Pulse2'

	//moving doors
	hinges = new Group()
	hinges.collider = 'k'
	hinges.w = 200
	hinges.h = 50
	hinges.x = -300
	hinges.y = -300
	hinges.color = 'black'

	music.loop()
	pressure.image = 'assets/ButtonUp.png'
}

function draw() {

	if(pressCount<0){
		pressCount = 0
	}
	background(100);

camera.y = canvas.h / 2

if(i == 8){
 if(cam == true ){
	if(player1.x >  canvas.w / 2 ){
	camera.x = player1.x
	} else {
		camera.x = canvas.w / 2
	}
 }
 if(cam == false){
	if(player2.x >  canvas.w / 2){
	camera.x = player2.x
	} else {
		camera.x = canvas.w /2
	}
 }
}
if(kb.presses('c')){
if(cam == true){
	cam = false
} else {
	cam = true
}
}
	//controls

	if(kb.pressing('a')){
		player1.vel.x = -6
		ivev1 = -30
		if(world.gravity.y <0){
			player1.mirror.x = false
		} else {
		player1.mirror.x = true
		}
		if(player1.colliding(floor) || player1.colliding(box)){
		player1.ani = 'Run1'
	}
	} else if(kb.released('a') && player1.colliding(floor) || 
	kb.released('a') &&
	 player1.colliding(box)){
		player1.ani.frame = 0
		player1.ani = 'Idle1'
	}

	if(kb.presses('w') && player1.colliding(floor) || 
	   player1.colliding(box) && kb.presses('w') ||
	   player1.colliding(ice) && kb.presses('w')){
		player1.ani = 'Fall1'
		player1.vel.y = world.gravity.y * -1
	}
if(player1.collides(floor) ||
 player1.collides(box)){
	player1.ani = 'Idle1'
}
if(player2.collides(floor) ||
 player2.collides(box)){
	player2.ani = 'Idle2'
}
//bounce

if(player1.collides(bounce)){
	player1.vel.y = -50
}

if(player2.collides(bounce)){
	player2.vel.y = -50
}

	if(kb.pressing('d')){
		player1.vel.x = 6
		icev1 = 30
		if(world.gravity.y < 0){
			player1.mirror.x = true
		} else {
		player1.mirror.x = false
		}
		if(player1.colliding(floor) ||
		 player1.colliding(box)){
		player1.ani = 'Run1'
		}
	} else if(kb.released('d') && player1.colliding(floor) ||
	 kb.released('d') &&
	  player1.colliding(box)){
		player1.ani.frame = 0
		player1.ani = 'Idle1'
	}

	if(kb.pressing(LEFT_ARROW)){
		
		player2.vel.x = -6
		icev2 = -30
		if(world.gravity.y <0){
			player2.mirror.x = false
		} else {
		player2.mirror.x = true
		}
		if(player2.colliding(floor) || player2.colliding(box)){
			player2.ani = 'Run2'
		}
		} else if(kb.released(LEFT_ARROW) &&
		 player2.colliding(floor) || 
		 kb.released(LEFT_ARROW) &&
		  player2.colliding(box)){
			player2.ani.frame = 0
			player2.ani = 'Idle2'
		}

	if(kb.presses(UP_ARROW) && player2.colliding(floor) || 
	   player2.colliding(box) && kb.presses(UP_ARROW) || 
	   player2.colliding(ice) && kb.presses(UP_ARROW)){
		player2.vel.y = world.gravity.y * -1
		player2.ani = 'Fall2'
	}

	if(kb.pressing(RIGHT_ARROW)){
		player2.vel.x = 6
		icev2 = 30
		if(world.gravity.y < 0){
			player2.mirror.x = true
		} else {
		player2.mirror.x = false
		}
		if(player2.colliding(floor) || player2.colliding(box)){
		player2.ani = 'Run2'
		}
	} else if(kb.released(RIGHT_ARROW) && 
	player2.colliding(floor) || 
	kb.released(RIGHT_ARROW) && 
	player2.colliding(box)){
		player2.ani.frame = 0
		player2.ani = 'Idle2'
	}

	if(kb.pressing('shift') &&
	 kb.pressing(UP_ARROW) &&
	  player2.colliding(box) && 
	  player2.colliding(floor)){
	player2.vel.y = -8
	box.vel.y = player2.vel.y
	}

	if(kb.pressing('f') &&
	 kb.pressing('w') &&
	  player1.colliding(box) && 
	  player1.colliding(floor)){
		player1.vel.y = -8
		box.vel.y = player1.vel.y
		box.vel.x = player1.vel.x
		}

	if(player1.overlapping(ladder) &&
	 kb.pressing('w')){
		player1.y-=5

		} else if(player1.overlapping(ladder) && kb.pressing('s')){
			player1.y += 5

		} else if(player1.overlapping(ladder)) {
			player1.vel.y = 0
		}
	//ladders
	if(player2.overlapping(ladder) &&
	 kb.pressing(UP_ARROW)){
		player2.y -= 5

	} else if(player2.overlapping(ladder) &&
	 kb.pressing(DOWN_ARROW)){
		player2.y += 5

	} else if(player2.overlapping(ladder)){
        player2.vel.y = 0

	}

   // ice
   if(player1.colliding(ice)){
	player1.vel.x = icev1
   }

   if(player2.colliding(ice)){
	player2.vel.x = icev2
   }

	//pressure plate
	for(j = 0;j<pressure.length;j++){
		if(box.overlapping(pressure[j]) || 
		player1.overlapping(pressure[j]) || 
		player2.overlapping(pressure[j])){
pressure[j].image = buttonRD
		} else{
			pressure[j].image = buttonRU
		}

	}
	
	 if(box.overlaps(pressure) ||
	  player1.overlaps(pressure) ||
	   player2.overlaps(pressure)){
       pressCount ++
	 }

	 if(box.overlapped(pressure) || 
	 player1.overlapped(pressure) || 
	 player2.overlapped(pressure)){
		pressCount --

	  }

	if(pressCount == pressure.length){
		nxt = true
	} else {

		if(pressure.length > 0){
		nxt = false
		}

	}

	// door pressure
	for(j=0;j<doorPress.length;j++){
	if(i == 5){
	if(box.overlapping(doorPress[j]) || 
	player1.overlapping(doorPress[j]) || 
	player2.overlapping(doorPress[j])){
		charge = false
		doorPress[j].image = buttonBD
	
	  }else if(!player1.overlapping(doorPress[0]) && !player1.overlapping(doorPress[1]) && 
	  !player2.overlapping(doorPress[0]) && !player2.overlapping(doorPress[1]) && 
	  !box.overlapping(doorPress[0]) && !box.overlapping(doorPress[1])){
		 charge = true
		 doorPress[j].image = buttonBU
	  } else{
		doorPress[j].image = buttonBU
	  }
	}

	if(i == 7){
		if(box.overlapping(doorPress[j]) ||
		 player1.overlapping(doorPress[j]) || 
		 player2.overlapping(doorPress[j])){
			charge = true
			doorPress[j].image = buttonBD
		  }else if(!player1.overlapping(doorPress[0]) && 
		  !player2.overlapping(doorPress[0]) && 
		  !box.overlapping(doorPress[0])  ){
			 charge = false
			 doorPress[j].image = buttonBU
		  }
		}
	}
	
	if(i == 9){
		for(j=0;j<doorPress.length;j++){
		if(box.overlapping(doorPress[j]) ||
		 player1.overlapping(doorPress[j]) || 
		 player2.overlapping(doorPress[j])){
			charge = false
			doorPress[j].image = buttonBD
		  }else if(!player1.overlapping(doorPress[0])  && 
		  !player2.overlapping(doorPress[0])  && 
		  !box.overlapping(doorPress[0]) ){
			 charge = true
			 doorPress[j].image = buttonBU 
		}
	}
	for(j=0;j<doorPress1.length;j++){
		  if(box.overlapping(doorPress1[j]) || 
		  player1.overlapping(doorPress1[j]) || 
		  player2.overlapping(doorPress1[j])){
			charge1 = false
			doorPress1[j].image = buttonBD
		  }else if(!player1.overlapping(doorPress1[0]) && !player1.overlapping(doorPress1[1]) && 
		  !player2.overlapping(doorPress1[0]) && !player2.overlapping(doorPress1[1]) && 
		  !box.overlapping(doorPress1[0]) && !box.overlapping(doorPress1[1])){
			 charge1 = true
			 doorPress1[j].image = buttonBU
		  }
	}
}

	
	// portals

	if(player1.overlapping(portali) && kb.presses('e')){
		player1.x = portalo.x
		player1.y = portalo.y
	}

	if(player1.overlapping(portalo) && kb.presses('e')){
		player1.x = portali.x
		player1.y = portali.y
	}

	if(player2.overlapping(portali) && kb.presses('.')){
		player2.x = portalo.x
		player2.y = portalo.y
	}

	if(player2.overlapping(portalo) && kb.presses('.')){
		player2.x = portali.x
		player2.y = portali.y
	}

//gravity


	if(player1.overlapping(grav) && kb.presses('e')){
	world.gravity.y *= -1
	player1.rotation += 180
    player2.rotation += 180
	if(grav.image == levL){
		grav.image = levR
	} else if(grav.image == levR){
		grav.image = levL
	}
	}

	if(player2.overlapping(grav) && kb.presses('.')){
world.gravity.y *= -1
player1.rotation += 180
player2.rotation += 180
if(grav.image == levL){
	grav.image = levR
} else if(grav.image == levR){
	grav.image = levL
}
	}

	if(player1.overlapping(gravX) && kb.presses('e')){
		x++
		if(x == 3){
			x = 0
		}
		if(x == 0){
			world.gravity.x = 0
		}
		if(x == 1){
			world.gravity.x = 10
		}
		if(x == 2){
			world.gravity.x = -10
		}
		if(gravX.image == levL){
			gravX.image = levR
		} else if(gravX.image == levR){
			gravX.image = levL
		}
	}
		if(player2.overlapping(gravX) && kb.presses('.')){
			x++
			if(x == 3){
				x = 0
			}
			if(x == 0){
				world.gravity.x = 0
			}
			if(x == 1){
				world.gravity.x = 10
			}
			if(x == 2){
				world.gravity.x = -10
			}
			if(gravX.image == levL){
				gravX.image = levR
			} else if(gravX.image == levR){
				gravX.image = levL
			}
		}
	//Power
	if(player1.overlapping(power) && kb.presses('e')){
		if(power.image == levL){
			power.image = levR
		} else if(power.image == levR){
			power.image = levL
		}
		if(i==4){

			if(charge == false){
	
				if(hinges[0].y<=700){
					hinges[0].y += 1
					hinges[0].vel.y = 3
				} else {
					hinges[0].vel.y = 0
				}
	
				if(hinges[1].x <=2500){
					hinges[1].x +=1
					hinges[1].vel.x = 3
				} else {
					hinges[1].vel.x = 0
				}
				
	
				charge = true
			} else{ 
			
			if(charge){
				if(hinges[0].y>=201){
					hinges[0].y -=1
					hinges[0].vel.y = -3
				} else {
					hinges[0].vel.y = 0
				}
	
				if(hinges[1].x >=1902){
					hinges[1].x -=1
					hinges[1].vel.x = -3
				} else {
					hinges[1].vel.x = 0
				}
				
				charge = false
			}
		}
			}
}
	if(i==5){
		if(charge == true){
	   hinges[0].w = 450
       hinges[0].y = 275
	   hinges[0].x = 575
		}
		
		if(charge == false){
			hinges[0].y = 775
			hinges[0].x = 575
		}
	}

	if(i==7){
		if(charge == false){
       hinges[0].y = 625
	   hinges[0].x = 375
		}
		
		if(charge == true){
			hinges[0].y = 625 - 150
			hinges[0].x = 375
		}
	} 
 if(i == 9){
	if(charge == false){
		hinges[0].y = 100
		hinges[0].x = 1225
		
		 }
		 
		 if(charge == true){
			 hinges[0].y = 475
			 hinges[0].x = 1225
			 
		 }
		 if(charge1 == false){
			hinges[1].y = 225
			hinges[1].x = 1875
			hinges[1].h = 200
		 }
		 if(charge1 == true){
			hinges[1].x = 1875
			 hinges[1].y = 475
			 hinges[1].h = 150
		 }
 }
	if(player2.overlapping(power) && kb.presses('.')){
		if(power.image == levL){
			power.image = levR
		} else if(power.image == levR){
			power.image = levL
		}
		if(i==4){

		if(charge == false){

			if(hinges[0].y<=700){
				hinges[0].y += 1
				hinges[0].vel.y = 3
			} else {
				hinges[0].vel.y = 0
			}

            if(hinges[1].x <=2500){
				hinges[1].x +=1
				hinges[1].vel.x = 3
			} else {
				hinges[1].vel.x = 0
			}
			

			charge = true
		} else{ 
		
		if(charge){
			if(hinges[0].y>=201){
				hinges[0].y -=1
				hinges[0].vel.y = -3
			} else {
				hinges[0].vel.y = 0
			}

            if(hinges[1].x >=1902){
				hinges[1].x -=1
				hinges[1].vel.x = -3
			} else {
				hinges[1].vel.x = 0
			}
			
			charge = false
		}
	}
		}
	}
	if(i==4){
		if(hinges[0].y==201 || hinges[0].y==700){
			hinges[0].vel.y = 0
		}
     if(hinges[1].x == 2500 || hinges[1].x == 1902){
	hinges[1].vel.x = 0
}
	}

	if(i == 8){
		if(player1.y > 1400 || player2.y >1400){
			rst = true
			player1.vel.x = 0
			player1.vel.y = 0
			player2.vel.x = 0
			player2.vel.y = 0
		}
	}
	//door + restart

	if(player1.overlapping(door) && nxt == true || player2.overlapping(door) && nxt == true || kb.presses('p') || kb.presses('o') || rst == true){
		
		if(nxt == true || kb.presses('p')){
			i++
	mapCurrent.removeAll()
	player1.x = 150
	player1.y = 390
	player2.x = 250
	player2.y = 390
	player1.rotation = 0
	player2.rotation = 0
	box.x = canvas.w/2
	pressCount=0
	world.gravity.y = 10
	mapCurrent = new Tiles(a[i],
		floor.w/2,
		floor.h/2,
		50,50
	)
	}

if(kb.presses('o') || rst == true){
mapCurrent.removeAll()
rst = false
player1.x = 150
player1.y = 390
player2.x = 250
player2.y = 390
player1.rotation = 0
player2.rotation = 0
box.x = canvas.w/2
box.layer = 0
pressCount=0
world.gravity.y = 10
world.gravity.x = 0
mapCurrent = new Tiles(a[i],
floor.w/2,
floor.h/2,
50,50
)
}

if(i==2){
portali.x = 1900
portali.y = 550
portalo.x = 1830
portalo.y = 93
box.x = -300

}

if(i==3){
	world.gravity.x = 0
	world.gravity.y = 10
box.remove()
box = new Sprite(canvas.w/3,canvas.h/2,80,80,'d')
box.friction = 7
box.bounciness = 0
box.rotationLock = true
box.addAni('Block',block,{frameSize: [90,90],frames:2,frameDelay:8})
box.ani = 'Block'
portali.x = -300
portali.y=-300
portalo.x = -300
portalo.y=-300
box.x = 600
box.y = 800
buttonRU = loadImage('assets/ButtonUp180.png')
	buttonRD = loadImage('assets/ButtonDown180.png')
}

if(i == 4){
	world.gravity.x = 0
	world.gravity.y = 10
box.x = -300
hinged = new hinges.Sprite()
hinged.x = 1650
hinged.y = 700
hinged.rotation = 90
hinged = new hinges.Sprite()
hinged.w = 500
hinged.x = 2500
hinged.y = 800
buttonRU = loadImage('assets/ButtonUp.png')
	buttonRD = loadImage('assets/ButtonDown.png')
}

if(i == 5){
	world.gravity.x = 0
	world.gravity.y = 10
	box.remove()
	box = new Sprite()
	box.w = 80
	box.h =80
	box.layer = 156
	box.x = 500
	box.y = 900
	box.addAni('Block',block,{frameSize: [90,90],frames:2,frameDelay:8})
	box.ani = 'Block'
	box.rotationLock = true
	portali.x = 1025
	portali.y = 975
	portalo.x = 1900
	portalo.y = 100
}

if(i == 6){
	world.gravity.x = 0
	world.gravity.y = 10
	box.remove()
	box = new Sprite()
	box.layer = 156
	box.w = 80
	box.h = 80
	box.x = 300
	box.y = 100
	box.addAni('Block',block,{frameSize: [90,90],frames:2,frameDelay:8})
box.ani = 'Block'
	box.rotationLock= true
	box.friction = 0
	floor.friction = 1
	player1.y = 400
	charge = false
	portali.x = -300
	portali.y = 975
	portalo.x = -300
	portalo.y = 100
	hinges.removeAll()
}
if(i==7){
	world.gravity.x = 0
	world.gravity.y = 10
	box.remove()
	player1.y = 100
	player2.x = 1135
	player2.y = 975
	portali.x = 825
	portali.y = 575
	portalo.x = 1825
	portalo.y = 225
	hinged = new hinges.Sprite()
    hinged.w = 50
	hinged.h = 150
    hinged.x = 375
    hinged.y = 625
	buttonBD = loadImage('assets/BlueDown180.png')
buttonBU = loadImage('assets/BlueUp180.png')
buttonRD = loadImage('assets/ButtonDown180.png')
buttonRU = loadImage('assets/ButtonUp180.png')
}
if(i == 8){
	hinges.removeAll()
	portali.x = -300
	portalo.x = -300
    resizeCanvas(3275,1080)
	signs = new Sprite()
	signs.x = 850
	signs.y = 900
	signs.image = no
	signs.scale = 3
	signs.collider = 'n'

	buttonBD = loadImage('assets/BlueDown.png')
buttonBU = loadImage('assets/BlueUp.png')
buttonRD = loadImage('assets/ButtonDown.png')
buttonRU = loadImage('assets/ButtonUp.png')
}
if(i==9){
	resizeCanvas(2250,1080,'fullscreen')
	signs.remove()
	signs.x=-400
	hinged = new hinges.Sprite()
	hinged.w = 250
	hinged.h = 50
	hinged.x = 1225
	hinged.y = 475
	hinged = new hinges.Sprite()
	hinged.w = 50
	hinged.h = 150
	hinged.x = 1875
	hinged.y = 475
	portali.x = 150
	portali.y = 150
	portalo.x = 2125
	portalo.y = 625
	player1.y = 700
}

mapCurrent.layer = 0
portali.layer = 0
portalo.layer = 0
		}
	
player1.layer = box.layer +1
	}
