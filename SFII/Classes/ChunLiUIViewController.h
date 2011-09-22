//
//  ChunLiUIViewController.h
//  SFII
//
//  Created by Alyssa Reese on 8/28/11.
//  Copyright 2011 @aaReese. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "SFIIAppDelegate.h"

@class SFIIAppDelegate;

@interface ChunLiUIViewController : UIViewController{    

    UIButton *backButton;
    SFIIAppDelegate *appDelegate;
    IBOutlet UIScrollView *theScrollView;
	IBOutlet UIImageView *theImageView;
}

@property (nonatomic, retain) IBOutlet UIButton *backButton;
@property (nonatomic, retain) IBOutlet SFIIAppDelegate *appDelegate;
@property (nonatomic, retain) IBOutlet UIScrollView *theScrollView;
@property (nonatomic, retain) IBOutlet UIImageView *theImageView;
@property(nonatomic) CGSize contentSize;


-(IBAction)showHome;

@end
