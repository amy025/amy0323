h, m = input().split()

H = int(h)
M = int(m)

if M < 45:
    M = 60 - (45-M)
    if H > 0:
        print(H-1, M)
    elif H == 0:
        print('23', M)

elif M > 44:
    M = M - 45
    if H > 0:
        print(H, M)
    elif H == 0:
        print('23', M)