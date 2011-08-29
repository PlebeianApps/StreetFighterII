//
//  ZangiefUIViewController.h
//  SFII
//
//  Created by Alyssa Reese on 8/28/11.
//  Copyright 2011 @aaReese. All rights reserved.
//



#import <UIKit/UIKit.h>
#import "SFIIAppDelegate.h"

@class SFIIAppDelegate;

@interface ZangiefUIViewController : UIViewController{    
    UIButton *backButton;
    SFIIAppDelegate *appDelegate;
}

@property (nonatomic, retain) IBOutlet UIButton *backButton;
@property (nonatomic, retain) IBOutlet SFIIAppDelegate *appDelegate;

-(IBAction)showHome;


@end
