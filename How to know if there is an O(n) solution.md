# How to know if there is an O(n) solution

There are several ways to ESTIMATE the optimal (best possible) time complexity. The most intuitive method is by thinking about the minimal amount of effort necessary.



#### Here is an example challenge:

![Screen Shot 2022-05-15 at 5.31.23 PM](/Users/chihiroshibayama/Desktop/Screen Shot 2022-05-15 at 5.31.23 PM.png)



In this problem and other array problems, a common trick is to ask yourself, “Do I need to look at every item of the array(s) to get the answer?” Think of an easier algo. What if the algo was “get the total of this number array”. Is it possible to solve this if the array looked like `[1,5,13, ?]` where the last item was hidden? No. Because you need to add that mystery number.

So now you know that AT THE VERY LEAST, you need to look at every item of the array. And if you need to do that, that’s linear time or O(n). Most often, you can get the minimal effort time complexity so asking yourself that question will usually lead to “Oh I can probably solve this with O(n)”.

Then you backtrack, and see how you get your current solution optimized for O(n). So the thought process of improving example solution 1 to `exclusiveSum`, can look like this:

1. The first solution uses reduce inside that `for loop` so this is currently O(n ^ 2).
2. Do I need to look at every item for this? Yes. This is probably doable in O(n)
3. What’s the fix for this? Oh it’s the computation of getting the total inside the for loop



##### Example 1: Original solution with O(N^2) time complexity

![Screen Shot 2022-05-15 at 5.27.12 PM](/Users/chihiroshibayama/Desktop/Screen Shot 2022-05-15 at 5.27.12 PM.png)



Example 2: Improved solution with O(N) time complexity

![Screen Shot 2022-05-15 at 5.29.19 PM](/Users/chihiroshibayama/Desktop/Screen Shot 2022-05-15 at 5.29.19 PM.png)