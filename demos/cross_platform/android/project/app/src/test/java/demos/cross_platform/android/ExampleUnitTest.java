package demos.cross_platform.android;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {
    @Test
    public void runTests() {
        demo.Tests t = demo.Tests.TestsBuilder(null).build();
        t.testListen();
        t.testFollow();
        t.testCompare();
        t.detach();
    }
}