//
//  SFII_infoViewController.h
//  SFII_info
//
//  Created by Alyssa Reese on 9/22/11.
//  Copyright 2011 @aaReese. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface SFII_infoViewController : UIViewController {
    IBOutlet UIView *Startup;
    IBOutlet UIScrollView *scrollRyu;
    IBOutlet UIScrollView *scrollChunli;
    IBOutlet UIScrollView *scrollDhalsim;
    IBOutlet UIScrollView *scrollGuile;
    IBOutlet UIScrollView *scrollBalrog;
    IBOutlet UIScrollView *scrollBlanka;
    IBOutlet UIScrollView *scrollKen;
    IBOutlet UIScrollView *scrollMbison;
    IBOutlet UIScrollView *scrollSagat;
    IBOutlet UIScrollView *scrollVega;
    IBOutlet UIScrollView *scrollZangief;
    IBOutlet UIScrollView *scrollEhonda;
    IBOutlet UIView *Chunli;
    IBOutlet UIView *Ehonda;
    IBOutlet UIView *Ryu;
    IBOutlet UIView *Dhalsim;
    IBOutlet UIView *Guile;
    IBOutlet UIView *Balrog;
    IBOutlet UIView *Blanka;
    IBOutlet UIView *Ken;
    IBOutlet UIView *Mbison;
    IBOutlet UIView *Sagat;
    IBOutlet UIView *Vega;
    IBOutlet UIView *Zangief;
}

-(IBAction)doChunli;
-(IBAction)backChunli;
-(IBAction)doRyu;
-(IBAction)backRyu;
-(IBAction)doDhalsim;
-(IBAction)backDhalsim;
-(IBAction)doGuile;
-(IBAction)backGuile;
-(IBAction)doBalrog;
-(IBAction)backBalrog;
-(IBAction)doBlanka;
-(IBAction)backBlanka;
-(IBAction)doKen;
-(IBAction)backKen;
-(IBAction)doMbison;
-(IBAction)backMbison;
-(IBAction)doSagat;
-(IBAction)backSagat;
-(IBAction)doVega;
-(IBAction)backVega;
-(IBAction)doZangief;
-(IBAction)backZangief;
-(IBAction)doEhonda;
-(IBAction)backEhonda;


@end
