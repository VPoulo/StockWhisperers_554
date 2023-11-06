from database import Database
import unittest

class TestStats(unittest.TestCase):
  
    def test_should_give_user_info(self):
        name = 'Alex Harris'
        email = "aharris@pdx.edu"
        stock = "GOOGL"
        price = 85
        action = "sell"
        self.assertEqual((name, email, stock, price, action), Database().getUserAction(1))

    def test_should_return_num_emails(self):
        
        self.assertEqual(2, Database().createDailyEmailList())

    def test_should_give_action_buy_or_sell(self):
        stock = "GOOGL"
        price = 85
        action = "sell"
        self.assertEqual(88.02, Database().compareStock(stock, price, action))        


    
    

        
        
if __name__ == '__main__':
    unittest.main()  # pragma: no cover
