// https://leetcode.com/problems/next-greater-element-i/
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const map: Map<number,number> = new Map (nums1.map((el,idx) => [el,idx]));
    const res: number[] = Array(nums1.length).fill(-1)
    const st: number[] = [];

    for(const num of  nums2) {
        while(st.length !== 0 && num > st[st.length - 1]) {
            const val = st.pop();
            // @ts-ignore
            const idx = map.get(val);
            if(idx) {
                res[idx] = num;
            }
        }
        if(map.has(num)) st.push(num);
    }
    return res;
};