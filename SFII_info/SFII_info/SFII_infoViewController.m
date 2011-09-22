//
//  SFII_infoViewController.m
//  SFII_info
//
//  Created by Alyssa Reese on 9/22/11.
//  Copyright 2011 @aaReese. All rights reserved.
//

#import "SFII_infoViewController.h"

@implementation SFII_infoViewController

- (IBAction)doChunli {
    scrollChunli.contentSize = CGSizeMake(320,1250);
    [Startup addSubview:Chunli];
}

- (IBAction)backChunli {
    [Chunli removeFromSuperview];
}

- (IBAction)doRyu {
    scrollRyu.contentSize = CGSizeMake(320,1250);
    [Startup addSubview:Ryu];
}

- (IBAction)backRyu {
    [Ryu removeFromSuperview];
}

- (IBAction)doBalrog {
    scrollBalrog.contentSize = CGSizeMake(320,1250);
    [Startup addSubview:Balrog];
}

- (IBAction)backBalrog {
    [Balrog removeFromSuperview];
}

- (IBAction)doBlanka {
    scrollBlanka.contentSize = CGSizeMake(320,1250);
    [Startup addSubview:Blanka];
}

- (IBAction)backBlanka {
    [Blanka removeFromSuperview];
}

- (IBAction)doDhalsim {
    scrollDhalsim.contentSize = CGSizeMake(320,1250);
    [Startup addSubview:Dhalsim];
}

- (IBAction)backDhalsim {
    [Dhalsim removeFromSuperview];
}

- (IBAction)doGuile {
    scrollGuile.contentSize = CGSizeMake(320,1250);
    [Startup addSubview:Guile];
}

- (IBAction)backGuile {
    [Guile removeFromSuperview];
}

- (IBAction)doKen {
    scrollKen.contentSize = CGSizeMake(320,1250);
    [Startup addSubview:Ken];
}

- (IBAction)backKen {
    [Ken removeFromSuperview];
}

- (IBAction)doMbison {
    scrollMbison.contentSize = CGSizeMake(320,1250);
    [Startup addSubview:Mbison];
}

- (IBAction)backMbison{
    [Mbison removeFromSuperview];
}

- (IBAction)doSagat {
    scrollSagat.contentSize = CGSizeMake(320,1250);
    [Startup addSubview:Sagat];
}

- (IBAction)backSagat {
    [Sagat removeFromSuperview];
}

- (IBAction)doVega {
    scrollVega.contentSize = CGSizeMake(320,1250);
    [Startup addSubview:Vega];
}

- (IBAction)backVega {
    [Vega removeFromSuperview];
}

- (IBAction)doZangief {
    scrollZangief.contentSize = CGSizeMake(320,1250);
    [Startup addSubview:Zangief];
}

- (IBAction)backZangief {
    [Zangief removeFromSuperview];
}

- (void)didReceiveMemoryWarning
{
    // Releases the view if it doesn't have a superview.
    [super didReceiveMemoryWarning];
    
    // Release any cached data, images, etc that aren't in use.
}

#pragma mark - View lifecycle

/*
// Implement viewDidLoad to do additional setup after loading the view, typically from a nib.
- (void)viewDidLoad
{
    [super viewDidLoad];
}
*/

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation == UIInterfaceOrientationPortrait);
}

@end
