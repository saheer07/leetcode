class Solution(object):
    def romanToInt(self, s):
          
        values = {
            "I": 1, "V": 5, "X": 10,
            "L": 50, "C": 100, "D": 500, "M": 1000
        }

        total = 0
        n = len(s)

        
        for i in range(n):
            curr = values[s[i]]

            
            if i + 1 < n:
                nxt = values[s[i + 1]]
            else:
                nxt = 0

           
            if curr < nxt:
                total -= curr   
            else:
                total += curr  
        return total
       