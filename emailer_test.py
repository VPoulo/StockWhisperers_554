import unittest
from emailer import parse_file
import coverage

covReport = coverage.Coverage()


class MyFristTests(unittest.TestCase):
    covReport.start()
    
    # Test that the parse function properly parses the information..     
    def test_file_parse(self):        
        row_variable = ["John Doe", "fakename@email.com", "test_ticker", "120.20"]
        name, email, ticker, price = parse_file(row_variable)
        self.assertEqual(name, "John Doe")
        self.assertEqual(email, "fakename@email.com")
        self.assertEqual(ticker, "test_ticker")
        self.assertEqual(price, "120.20")

    
def main():
    unittest.main()
    
    # Stop coverage report
    covReport.stop()
    
    # Generate a report
    covReport.report()

if __name__ == "__main__":
    unittest.main()