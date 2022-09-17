import { PrismaClient } from '@prisma/client';
import express, { request, response } from 'express'
import cors from 'cors'
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes'
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string';

const app = express()
// connect auto with db
const prisma = new PrismaClient()

app.use(express.json)
// domínios aceitáveis
app.use(cors())

// HTTP methods / API RESTful / HTTP Codes

/** 
--- PARAMETERS TYPES ---

- Query: before '?', when if do persist state of page ex: localhost:3333/ads?page=2
    - Never utilize with sensive data, why we can see in url page;
    - Always are named.

- Route: id or identificater

- Body: When needs send a lot data/msg
    - Keys

*/

// async method
app.get('/games', async (req, res) => {
    console.log("Be here!")
    // await → will hold on be aready 
    const games = await prisma.game.findMany({
        // count ads
        include: {
            _count: {
                select: {
                    ads: true,
                }

            }
        }
});
    return res.json(games);
});    

// method 'post'(create) a ads
 app.post('/games/:id/ads', async (req, res) => {
    const gameId = req.params.id;
    const body: any = req.body;

    // VALIDAÇÃO ZOD JS APLICAR AQUI

    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord, 
            weekDays: body.weekDays.join(','),
            hourStart: convertHourStringToMinutes(body.hourStart),
            hourEnd: convertHourStringToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel
        }
    })
    return res.status(201).json(ad);
});


// Put ':' with id, the parameters stay dinamic
// This will return one ad 
app.get('/games/:id/ads', async (req, res) => {
    console.log("METHOD GET - OK")
    const gameId = req.params.id;

    const ads = await prisma.ad.findMany({
        select:{
            // define what parameter will appear
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,

        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc',
        }
    })

    return res.json(ads.map(ad => {
        return {
            // sprad operator - take all 
            ...ad,
            // created a array with all days played
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHourString(ad.hourStart),
            hourEnd: convertMinutesToHourString(ad.hourEnd),
        }
    }))
})

// await always neeed async 
// :id pegando todos
app.get('/ads/:id/discord', async (req, res) => {
    const adId = req.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord:true,
        },
        where: {
            id: adId,
        }
    });
 
    return res.json({
        discord: ad.discord,
    })

})
    
    app.listen(3333, () => {
        console.log("App listening on pont 2710");
});