class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        u = 0
        d = len(matrix) - 1
        row = 0

        while u <= d:
            middle = (u + d) // 2

            if target > matrix[middle][0]:
                if target <= matrix[middle][-1]:
                    row = middle
                    break
                u = middle + 1

            elif target < matrix[middle][0]:
                d = middle - 1

            elif target == matrix[middle][0]:
                return True

        l = 0
        r = len(matrix[row]) - 1

        while l <= r:
            middle = (l+r) // 2

            if target > matrix[row][middle]:
                l = middle + 1
            elif target < matrix[row][middle]:
                r = middle - 1
            elif target == matrix[row][middle]:
                return True

        return False
