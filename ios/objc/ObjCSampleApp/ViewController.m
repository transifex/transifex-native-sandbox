//
//  ViewController.m
//  ObjCSampleApp
//
//  Created by Stelios Petrakis on 30/10/20.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSString *localizedString = NSLocalizedString(@"test string",
                                                  comment: @"Test comment");

    NSLog(@"%s -> %@",
          __PRETTY_FUNCTION__,
          localizedString);
    
    NSString *localizedMinutes = NSLocalizedString(@"unit-time.%d-minute(s)",
                                                   comment: "dminutes");
    NSString *localizedUnsignedMinutes = NSLocalizedString(@"unit-time.%u-minute(s)",
                                                     comment: "uminutes");
    
    for (int cnt = 0; cnt < 10; cnt++) {
        NSString *text = [NSString localizedStringWithFormat:localizedMinutes,
                          cnt];
        NSLog(@"[%d] -> %@", cnt, text);
    }
    
    NSUInteger number = 2;
    NSString *uText = [NSString localizedStringWithFormat:localizedUnsignedMinutes,
                       number];
    NSLog(@"[2] -> %@", uText);
    
    NSLog(NSLocalizedString(@"Powerful you have become, the dark side I sense in you.",
                            @""));
    NSLog(NSLocalizedString(@"I find your lack of faith disturbing.",
                            @""));
}


@end
