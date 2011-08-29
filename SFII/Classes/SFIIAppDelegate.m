//
//  SFIIAppDelegate.m
//  SFII
//
//  Created by Alyssa Reese on 8/4/11.
//  Copyright 2011 @aaReese. All rights reserved.
//

#import "SFIIAppDelegate.h"
#import "ChunLiUIViewController.h"

@implementation SFIIAppDelegate

@synthesize window;
@synthesize homeViewController;
@synthesize chunLiUIViewController;

@synthesize Ken, Ryu, Chunli, Blanca;


- (IBAction) doKen {
	window.backgroundColor = [UIColor redColor];
}

- (IBAction) doRyu {
	window.backgroundColor = [UIColor greenColor];
}

- (IBAction) doChunli {
	window.backgroundColor = [UIColor blueColor];
    self.window.rootViewController = chunLiUIViewController;
}

- (IBAction) doBlanca {
	window.backgroundColor = [UIColor whiteColor];    
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
