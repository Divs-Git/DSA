// https://leetcode.com/problems/valid-parentheses/description/
function isValid(s: string): boolean {
    const brackets: Record<string,string> = {
        '(' : ')',
        '{' : '}',
        '[': ']',
    }

    const stack: string[] = [];

    for(const char of s) {
        if(brackets[char]) {
            stack.push(char);
        } else {
            if(stack.length === 0) return false;
            const top = stack[stack.length - 1];
            stack.pop();
            if(brackets[top] !== char) return false;
        }
    }
    return stack.length === 0;
};