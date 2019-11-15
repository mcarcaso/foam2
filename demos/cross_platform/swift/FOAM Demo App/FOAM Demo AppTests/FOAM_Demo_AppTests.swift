import XCTest
@testable import FOAM_Demo_App

class FOAM_Demo_AppTests: XCTestCase {
  func testExample() {
    let t = demo_Tests.demo_TestsBuilder(nil).build()
    t.testListen();
    t.testFollow();
    t.testExpression();
    t.testExpressionSlot();
    t.testHasOwnProperty();
    t.testSubSlot();
    t.testSubSlot2();
    t.testNestedExpression();
    t.testReactions();
    t.detach();
  }
}
