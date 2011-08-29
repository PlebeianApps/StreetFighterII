//
//  SFIIAppDelegate.m
//  SFII
//
//  Created by Alyssa Reese on 8/4/11.
//  Copyright 2011 @aaReese. All rights reserved.
//

#import "SFIIAppDelegate.h"
#import "ChunLiUIViewController.h"
#import "KenUIViewController.h"
#import "BlancaUIViewController.h"
#import "RyuUIViewController.h"
#import "EhondaUIViewController.h"
#import "ZangiefUIViewController.h"
#import "GuileUIViewController.h"
#import "DhalsimUIViewController.h"

@implementation SFIIAppDelegate

@synthesize window;
@synthesize homeViewController;
@synthesize chunLiUIViewController, kenUIViewController, ryuUIViewController, blancaUIViewController, ehondaUIViewController, guileUIViewController, zangiefUIViewController, dhalsimUIViewController;
@synthesize Ken, Ryu, Chunli, Blanca, Ehonda, Guile, Zangief, Dhalsim;


- (IBAction) doKen {
	window.backgroundColor = [UIColor redColor];
    self.window.rootViewController = kenUIViewController;
}

- (IBAction) doRyu {
	window.backgroundColor = [UIColor greenColor];
    self.window.rootViewController = ryuUIViewController;
}

- (IBAction) doChunli {
	window.backgroundColor = [UIColor blueColor];
    self.window.rootViewController = chunLiUIViewController;
}

- (IBAction) doBlanca {
	window.backgroundColor = [UIColor whiteColor];  
    self.window.rootViewController = blancaUIViewController;
}

- (IBAction) doEhonda {
	window.backgroundColor = [UIColor yellowColor];  
    self.window.rootViewController = ehondaUIViewController;
}

- (IBAction) doZangief {
	window.backgroundColor = [UIColor purpleColor];  
    self.window.rootViewController = zangiefUIViewController;
}

- (IBAction) doGuile {
	window.backgroundColor = [UIColor orangeColor];  
    self.window.rootViewController = guileUIViewController;
}

- (IBAction) doDhalsim {
	window.backgroundColor = [UIColor redColor];  
    self.window.rootViewController = dhalsimUIViewController;
}


- (IBAction)showHome {
     self.window.rootViewController = homeViewController;
}


#pragma mark -
#pragma mark Application lifecycle

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {        
    // Override point for customization after application launch.
    homeViewController = self.window.rootViewController;
    // CHUN LI
    [self setChunLiUIViewController:[[ChunLiUIViewController alloc] initWithNibName:@"ChunLiUIViewController" bundle:nil]];
    [self.chunLiUIViewController setAppDelegate:self];
    // KEN
    [self setKenUIViewController:[[KenUIViewController alloc] initWithNibName:@"KenUIViewController" bundle:nil]];
    [self.kenUIViewController setAppDelegate:self];
    // BLANCA
    [self setKenUIViewController:[[BlancaUIViewController alloc] initWithNibName:@"BlancaUIViewController" bundle:nil]];
    [self.blancaUIViewController setAppDelegate:self];
    // RYU
    [self setRyuUIViewController:[[RyuUIViewController alloc] initWithNibName:@"RyuUIViewController" bundle:nil]];
    [self.ryuUIViewController setAppDelegate:self];
    // EHONDA
    [self setEhondaUIViewController:[[EhondaUIViewController alloc] initWithNibName:@"EhondaUIViewController" bundle:nil]];
    [self.ehondaUIViewController setAppDelegate:self];
    // ZANGIEF
    [self setZangiefUIViewController:[[ZangiefUIViewController alloc] initWithNibName:@"ZangiefUIViewController" bundle:nil]];
    [self.zangiefUIViewController setAppDelegate:self];
    // DHALSIM
    [self setDhalsimUIViewController:[[DhalsimUIViewController alloc] initWithNibName:@"DhalsimUIViewController" bundle:nil]];
    [self.dhalsimUIViewController setAppDelegate:self];
    // SHOW MAIN WINDOW
    [self.window makeKeyAndVisible];    
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    /*
     Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
     Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.
     */
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    /*
     Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later. 
     If your application supports background execution, called instead of applicationWillTerminate: when the user quits.
     */
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    /*
     Called as part of  transition from the background to the inactive state: here you can undo many of the changes made on entering the background.
     */
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    /*
     Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
     */
}


- (void)applicationWillTerminate:(UIApplication *)application {
    /*
     Called when the application is about to terminate.
     See also applicationDidEnterBackground:.
     */
}


#pragma mark -
#pragma mark Memory management

- (void)applicationDidReceiveMemoryWarning:(UIApplication *)application {
    /*
     Free up as much memory as possible by purging cached data objects that can be recreated (or reloaded from disk) later.
     */
}


- (void)dealloc {
    [window release];
    [super dealloc];
}


@end
