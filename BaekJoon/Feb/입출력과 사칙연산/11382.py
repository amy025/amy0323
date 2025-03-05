a = int(input())
b = int(input())
b1 = (b % 10) * a
b2 = ((b // 10) % 10) * a
b3 = ((b // 100)) * a
res = a*b

print(b1)
print(b2)
print(b3)
print(res)