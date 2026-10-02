public class Solution {
    public int NumOfPairs(string[] nums, string target) {
        int count = 0;
			for(int i = 0; i < nums.Length; i++){
				for(int j = 0; j < nums.Length; j++){
					if(i != j && target == nums[i] + nums[j]){
						count++;
					}
				}
			}
			return count;
    }
}