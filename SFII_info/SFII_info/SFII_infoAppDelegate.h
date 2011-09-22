//
//  SFII_infoAppDelegate.h
//  SFII_info
//
//  Created by Alyssa Reese on 9/22/11.
//  Copyright 2011 @aaReese. All rights reserved.
//

#import <UIKit/UIKit.h>

@class SFII_infoViewController;

@interface SFII_infoAppDelegate : NSObject <UIApplicationDelegate>

@property (nonatomic, retain) IBOutlet UIWindow *window;

@property (nonatomic, retain) IBOutlet SFII_infoViewController *viewController;

@end
