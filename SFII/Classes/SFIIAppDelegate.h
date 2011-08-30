//
//  SFIIAppDelegate.h
//  SFII
//
//  Created by Alyssa Reese on 8/4/11.
//  Copyright 2011 @aaReese. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "ChunLiUIViewController.h"
#import "KenUIViewController.h"
#import "BlancaUIViewController.h"
#import "RyuUIViewController.h"
#import "EhondaUIViewController.h"
#import "ZangiefUIViewController.h"
#import "GuileUIViewController.h"
#import "DhalsimUIViewController.h"

@class ChunLiUIViewController;
@class KenUIViewController;
@class BlancaUIViewController;
@class RyuUIViewController;
@class EhondaUIViewController;
@class ZangiefUIViewController;
@class GuileUIViewController;
@class DhalsimUIViewController;

@interface SFIIAppDelegate : NSObject <UIApplicationDelegate> {
    UIWindow *window;
	UIButton *Ken;
	UIButton *Ryu;
	UIButton *Chunli;
	UIButton *Blanca;
    UIButton *Ehonda;
    UIButton *Zangief;
    UIButton *Guile;
    UIButton *Dhalsim;
    UIButton *character;
}

@property (nonatomic, retain) IBOutlet UIWindow *window;
@property (nonatomic, retain) IBOutlet UIButton *Ken;
@property (nonatomic, retain) IBOutlet UIButton *Ryu;
@property (nonatomic, retain) IBOutlet UIButton *Chunli;
@property (nonatomic, retain) IBOutlet UIButton *Blanca;
@property (nonatomic, retain) IBOutlet UIButton *Ehonda;
@property (nonatomic, retain) IBOutlet UIButton *Zangief;
@property (nonatomic, retain) IBOutlet UIButton *Guile;
@property (nonatomic, retain) IBOutlet UIButton *Dhalsim;
@property (nonatomic, retain) IBOutlet UIButton *character;
@property (nonatomic, retain) IBOutlet UIViewController *homeViewController;
@property (nonatomic, retain) IBOutlet ChunLiUIViewController *chunLiUIViewController;
@property (nonatomic, retain) IBOutlet KenUIViewController *kenUIViewController;
@property (nonatomic, retain) IBOutlet RyuUIViewController *ryuUIViewController;
@property (nonatomic, retain) IBOutlet BlancaUIViewController *blancaUIViewController;
@property (nonatomic, retain) IBOutlet EhondaUIViewController *ehondaUIViewController;
@property (nonatomic, retain) IBOutlet ZangiefUIViewController *zangiefUIViewController;
@property (nonatomic, retain) IBOutlet GuileUIViewController *guileUIViewController;
@property (nonatomic, retain) IBOutlet DhalsimUIViewController *dhalsimUIViewController;


-(IBAction)doKen;
-(IBAction)doRyu;
-(IBAction)doChunli;
-(IBAction)doBlanca;
-(IBAction)doEhonda;
-(IBAction)doZangief;
-(IBAction)doGuile;
-(IBAction)doDhalsim;
-(IBAction)showHome;
@end


