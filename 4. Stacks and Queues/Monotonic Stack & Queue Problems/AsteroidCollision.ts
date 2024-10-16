// https://leetcode.com/problems/asteroid-collision/
function asteroidCollision(asteroids: number[]): number[] {
    let st: number[] = [];

    for(const num of asteroids) {
        if(num >= 0) {
            st.push(num);
        } else if(num < 0) {
            while(st.length !== 0 && st[st.length - 1] > 0 && st[st.length - 1] < Math.abs(num)) {
                st.pop();
            }
            if(st.length !== 0 && st[st.length - 1] === Math.abs(num)) {
                st.pop();
            } else if(st.length === 0 || st[st.length - 1] < 0) {
                st.push(num);
            }
        }
    }

    return st;
};