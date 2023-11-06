from database import Database
import unittest

class TestStats(unittest.TestCase):
    

    def test_should_give_user_info(self):
        name = 'Alex Harris'
        email = "aharris@pdx.edu"
        stock = "GOOG"
        price = 150
        action = "sell"
        self.assertEqual((name, email, stock, price, action), Database().getUserAction(1))

    

    def test_should_return_sell(self):
        user_info = 300
        stock_info =156
        self.assertEqual(True, Database().stockCompare(user_info, stock_info))
    
    

        
        
if __name__ == '__main__':
    unittest.main()  # pragma: no cover
