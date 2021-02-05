//
//  AppDelegate.m
//  ObjCSampleApp
//
//  Created by Stelios Petrakis on 30/10/20.
//

#import "AppDelegate.h"

@import Transifex;

@interface CustomLocaleProvider : NSObject <TXCurrentLocaleProvider>

@end

@implementation CustomLocaleProvider

- (NSString * _Nonnull)currentLocale {
    return @"sl";
}

@end

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Extract token
    NSString *transifexToken = NSBundle.mainBundle.infoDictionary[@"TRANSIFEX_TOKEN"];

    // Initialize Transifex Native
    CustomLocaleProvider *customLocale = [CustomLocaleProvider new];
    
    TXLocaleState *localeState = [[TXLocaleState alloc] initWithSourceLocale:@"en"
                                                                  appLocales:@[
                                                                      @"en",
                                                                      @"fr",
                                                                      @"de",
                                                                      @"sl"
                                                                  ]
                                                       currentLocaleProvider:customLocale];
    
    TXPseudoTranslationPolicy *pseudoTranslationPolicy = [TXPseudoTranslationPolicy new];
    TXWrappedStringPolicy *wrappedStringPolicy = [[TXWrappedStringPolicy alloc] initWithStart:@"["
                                                                                          end:@"]"];
    TXCompositePolicy *compositePolicy = [[TXCompositePolicy alloc] init:@[
        pseudoTranslationPolicy,
        wrappedStringPolicy
    ]];
    
    [TXNative initializeWithLocales:localeState
                              token:transifexToken
                             secret:nil
                            cdsHost:nil
                            session:nil
                              cache:nil
                      missingPolicy:compositePolicy
                        errorPolicy:nil
                  renderingStrategy:TXRenderingStategyPlatform];
    
    [TXNative fetchTranslations:nil
              completionHandler:nil];
    
    return YES;
}


#pragma mark - UISceneSession lifecycle


- (UISceneConfiguration *)application:(UIApplication *)application configurationForConnectingSceneSession:(UISceneSession *)connectingSceneSession options:(UISceneConnectionOptions *)options {
    // Called when a new scene session is being created.
    // Use this method to select a configuration to create the new scene with.
    return [[UISceneConfiguration alloc] initWithName:@"Default Configuration" sessionRole:connectingSceneSession.role];
}


- (void)application:(UIApplication *)application didDiscardSceneSessions:(NSSet<UISceneSession *> *)sceneSessions {
    // Called when the user discards a scene session.
    // If any sessions were discarded while the application was not running, this will be called shortly after application:didFinishLaunchingWithOptions.
    // Use this method to release any resources that were specific to the discarded scenes, as they will not return.
}


@end
