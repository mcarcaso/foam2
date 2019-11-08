//
//  FOAM_Demo_AppTests.swift
//  FOAM Demo AppTests
//
//  Created by Michael Carcasole on 2019-11-03.
//

import XCTest
@testable import FOAM_Demo_App

class FOAM_Demo_AppTests: XCTestCase {

  override func setUp() {
    // Put setup code here. This method is called before the invocation of each test method in the class.
  }

  override func tearDown() {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
  }

  func testExample() {
    // This is an example of a functional test case.
    // Use XCTAssert and related functions to verify your tests produce the correct results.
    demo_Tests.demo_TestsBuilder(nil).build().testListen();
  }

  func testPerformanceExample() {
    // This is an example of a performance test case.
    self.measure {
      // Put the code you want to measure the time of here.
    }
  }

}
