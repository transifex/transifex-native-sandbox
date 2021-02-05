//
//  ViewController.swift
//  SwiftSampleApp
//
//  Created by Stelios Petrakis on 30/10/20.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
                
        let localizedString = NSLocalizedString("test string",
                                                comment: "Test comment")
        
        print("\(#function) -> \(localizedString)")
        
        let localizedMinutes = NSLocalizedString("unit-time.%d-minute(s)",
                                                 comment: "dminutes")
        let localizedUnsignedMinutes = NSLocalizedString("unit-time.%u-minute(s)",
                                                         comment: "uminutes")
        
        for cnt in 0...10 {
            let text = NSString.localizedStringWithFormat(localizedMinutes as NSString,
                                                          cnt)
            print("[\(cnt)] -> \(text)")
        }
        
        let utext = String.localizedStringWithFormat(localizedUnsignedMinutes,
                                                     UInt(2))
        print("[2] -> \(utext)")
        
        print(NSLocalizedString("Powerful you have become, the dark side I sense in you.",
                                comment: ""))
        print(NSLocalizedString("I find your lack of faith disturbing.",
                                comment: ""))
        
    }
}

