class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if t == "":
            return ""

        t_count,window = {},{}
        for i in t:
            t_count[i] = t_count.get(i,0) + 1

        res, resLen = [-1,-1] , float("infinity")
        have, need = 0, len(t_count)
        l = 0



        for r in range(len(s)):
            c = s[r]
            window[c] = window.get(c,0) + 1

            if c in t_count and window[c] == t_count[c]:
                have += 1

            while have == need:
                if (r - l + 1) < resLen:
                    res = [l,r]
                    resLen = r - l + 1

                window[s[l]] -= 1
                if s[l] in t_count and window[s[l]] < t_count[s[l]]:
                    have -= 1
                l += 1

        l, r = res

        return s[l:r + 1] if resLen != float("infinity") else ""
