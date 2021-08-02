import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export enum ROLES {
    Admin = 1,
    Zeus = 2,
}

const prisma = new PrismaClient()
module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, secret, userId, name, method } = JSON.parse(req.body)
    console.log(req.body)

    if (secret === process.env.AUTH0_SECRET) {
        switch (method) {
            case 'POST':
                {
                    try {
                        await prisma.user.create({
                            data: { email, userId, name },
                        })
                    } catch (err) {
                        console.log(err)
                    } finally {
                        await prisma.$disconnect()
                        res.send({ recived: true, roles: [] })
                    }
                }
                break
            case 'GET': {
                let roles
                try {
                    let user = await prisma.user.findUnique({
                        where: {
                            userId,
                        },
                        include: {
                            roles: true,
                        },
                    })
                    roles = user?.roles.map((role) => role.id)
                } catch (err) {
                    console.log(err)
                } finally {
                    await prisma.$disconnect()
                    res.send({ recived: true, roles: roles || [] })
                }
                break
            }
        }
    } else {
        res.send('You forgot to send me your secret!')
    }
}
