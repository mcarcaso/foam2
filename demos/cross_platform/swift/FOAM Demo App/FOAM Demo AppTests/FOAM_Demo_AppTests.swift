//
//  FOAM_Demo_AppTests.swift
//  FOAM Demo AppTests
//
//  Created by Michael Carcasole on 2019-11-03.
//

import XCTest
@testable import FOAM_Demo_App

class FOAM_Demo_AppTests: XCTestCase {
  func testExample() {
    // This is an example of a functional test case.
    // Use XCTAssert and related functions to verify your tests produce the correct results.
    demo_Tests.demo_TestsBuilder(nil).build().testListen();
  }
}
