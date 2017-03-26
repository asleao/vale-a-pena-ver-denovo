/**
 * Created by aleao on 24/03/17.
 */

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:features",
        plugin = { "pretty",
                "html:target/cucumber-html-report" },
        tags = {})
public class CukeRunner {
}
