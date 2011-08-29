//
//  SFIIAppDelegate.h
//  SFII
//
//  Created by Alyssa Reese on 8/4/11.
//  Copyright 2011 @aaReese. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ChunLiUIViewController.h"

@class ChunLiUIViewController;

@interface SFIIAppDelegate : NSObject <UIApplicationDelegate> {
    UIWindow *window;
	UIButton *Ken;
	UIButton *Ryu;
	UIButton *Chunli;
	UIButton *Blanca;
}

@property (nonatomic, retain) IBOutlet UIWindow *window;
@property (nonatomic, retain) IBOutlet UIButton *Ken;
@property (nonatomic, retain) IBOutlet UIButton *Ryu;
@property (nonatomic, retain) IBOutlet UIButton *Chunli;
@property (nonatomic, retain) IBOutlet UIButton *Blanca;
@property (nonatomic, retain) IBOutlet UIViewController *homeViewController;
@property (nonatomic, retain) IBOutlet ChunLiUIViewController *chunLiUIViewController;


-(IBAction)doKen;
-(IBAction)doRyu;
-(IBAction)doChunli;
-(IBAction)doBlanca;
-(IBAction)showHome;
@end


