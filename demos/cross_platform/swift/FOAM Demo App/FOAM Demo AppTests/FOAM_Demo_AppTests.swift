import XCTest
@testable import FOAM_Demo_App

class FOAM_Demo_AppTests: XCTestCase {
  func testExample() {
    demo_Tests.demo_TestsBuilder(nil).build().testListen();
    demo_Tests.demo_TestsBuilder(nil).build().testFollow();
  }
}
