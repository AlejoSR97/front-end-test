import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { Video } from 'src/app/models/video.dto';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  respuesta = {
    kind: 'youtube#videoListResponse',
    etag: '9nPKRlZbzHHDItEIORbTLKZ4E5M',
    items: [
      {
        kind: 'youtube#video',
        etag: 'KOAS38770qLnCrgSVTBgPXNQ7mQ',
        id: 'ardRp2x0D_E',
        snippet: {
          publishedAt: '2020-06-26T23:53:38Z',
          channelId: 'UCV9_KinVpV-snHe3C3n1hvA',
          title: 'Taking Accountability',
          description: '.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/ardRp2x0D_E/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/ardRp2x0D_E/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/ardRp2x0D_E/hqdefault.jpg',
              width: 480,
              height: 360
            },
            standard: {
              url: 'https://i.ytimg.com/vi/ardRp2x0D_E/sddefault.jpg',
              width: 640,
              height: 480
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/ardRp2x0D_E/maxresdefault.jpg',
              width: 1280,
              height: 720
            }
          },
          channelTitle: 'shane',
          tags: [
            'shane',
            'dawson'
          ],
          categoryId: '22',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Taking Accountability',
            description: '.'
          }
        }
      },
      {
        kind: 'youtube#video',
        etag: 'dLvGERn7lL30KcqV1B-W28PuBRA',
        id: 'yBZKk-cCv64',
        snippet: {
          publishedAt: '2020-06-27T04:00:09Z',
          channelId: 'UC8-Th83bH_thdKZDJCrn88g',
          title: 'BLACKPINK: How You Like That (The Tonight Show: At Home Edition)',
          // tslint:disable-next-line: max-line-length
          description: 'BLACKPINK comes together for a debut performance of "How You Like That" for another Tonight Show: At Home Edition.\n\nSubscribe NOW to The Tonight Show Starring Jimmy Fallon: http://bit.ly/1nwT1aN\n \nWatch The Tonight Show Starring Jimmy Fallon Weeknights 11:35/10:35c\n \nGet more The Tonight Show Starring Jimmy Fallon: https://www.nbc.com/the-tonight-show\n \nJIMMY FALLON ON SOCIAL\nFollow Jimmy: http://Twitter.com/JimmyFallon\nLike Jimmy: https://Facebook.com/JimmyFallon\nFollow Jimmy: https://www.instagram.com/jimmyfallon/\n \nTHE TONIGHT SHOW ON SOCIAL\nFollow The Tonight Show: http://Twitter.com/FallonTonight\nLike The Tonight Show: https://Facebook.com/FallonTonight\nFollow The Tonight Show: https://www.instagram.com/fallontonight/\nTonight Show Tumblr: http://fallontonight.tumblr.com\n \nThe Tonight Show Starring Jimmy Fallon features hilarious highlights from the show, including comedy sketches, music parodies, celebrity interviews, ridiculous games, and, of course, Jimmy\'s Thank You Notes and hashtags! You\'ll also find behind the scenes videos and other great web exclusives.\n \nGET MORE NBC\nNBC YouTube: http://bit.ly/1dM1qBH\nLike NBC: http://Facebook.com/NBC\nFollow NBC: http://Twitter.com/NBC\nNBC Instagram: http://instagram.com/nbctv\nNBC Tumblr: http://nbctv.tumblr.com/\n \nBLACKPINK: How You Like That (The Tonight Show: At Home Edition)\nhttp://www.youtube.com/fallontonight\n\n#FallonTonight\n#BLACKPINK\n#JimmyFallon',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/yBZKk-cCv64/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/yBZKk-cCv64/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/yBZKk-cCv64/hqdefault.jpg',
              width: 480,
              height: 360
            },
            standard: {
              url: 'https://i.ytimg.com/vi/yBZKk-cCv64/sddefault.jpg',
              width: 640,
              height: 480
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/yBZKk-cCv64/maxresdefault.jpg',
              width: 1280,
              height: 720
            }
          },
          channelTitle: 'The Tonight Show Starring Jimmy Fallon',
          tags: [
            'The Tonight Show',
            'Jimmy Fallon',
            'BLACKPINK',
            'How You Like That',
            'The Tonight Show: At Home Edition',
            'NBC',
            'Television',
            'Funny',
            'Talk Show',
            'humor',
            'snl',
            'tonight',
            'show',
            'funny video',
            'talent',
            'celebrities',
            'video',
            'clip',
            'highlight',
            'Blackpink on Fallon',
            'Blackpink live',
            'Sour Candy',
            'Kill This Love',
            'Kiss and make Up',
            'As If It’s Your Last',
            'DDU DU DDU DU',
            'BOOMBAYAH',
            'PLAYING WITH FIRE',
            'WHISTLE',
            'Don’t Know What To Do',
            'Forever Young',
            'How You Like That live',
            'kpop',
            'korean pop',
            'k pop',
            'bts',
            'Lady Gaga',
            'Dua Lipa'
          ],
          categoryId: '23',
          liveBroadcastContent: 'none',
          localized: {
            title: 'BLACKPINK: How You Like That (The Tonight Show: At Home Edition)',
            // tslint:disable-next-line: max-line-length
            description: 'BLACKPINK comes together for a debut performance of "How You Like That" for another Tonight Show: At Home Edition.\n\nSubscribe NOW to The Tonight Show Starring Jimmy Fallon: http://bit.ly/1nwT1aN\n \nWatch The Tonight Show Starring Jimmy Fallon Weeknights 11:35/10:35c\n \nGet more The Tonight Show Starring Jimmy Fallon: https://www.nbc.com/the-tonight-show\n \nJIMMY FALLON ON SOCIAL\nFollow Jimmy: http://Twitter.com/JimmyFallon\nLike Jimmy: https://Facebook.com/JimmyFallon\nFollow Jimmy: https://www.instagram.com/jimmyfallon/\n \nTHE TONIGHT SHOW ON SOCIAL\nFollow The Tonight Show: http://Twitter.com/FallonTonight\nLike The Tonight Show: https://Facebook.com/FallonTonight\nFollow The Tonight Show: https://www.instagram.com/fallontonight/\nTonight Show Tumblr: http://fallontonight.tumblr.com\n \nThe Tonight Show Starring Jimmy Fallon features hilarious highlights from the show, including comedy sketches, music parodies, celebrity interviews, ridiculous games, and, of course, Jimmy\'s Thank You Notes and hashtags! You\'ll also find behind the scenes videos and other great web exclusives.\n \nGET MORE NBC\nNBC YouTube: http://bit.ly/1dM1qBH\nLike NBC: http://Facebook.com/NBC\nFollow NBC: http://Twitter.com/NBC\nNBC Instagram: http://instagram.com/nbctv\nNBC Tumblr: http://nbctv.tumblr.com/\n \nBLACKPINK: How You Like That (The Tonight Show: At Home Edition)\nhttp://www.youtube.com/fallontonight\n\n#FallonTonight\n#BLACKPINK\n#JimmyFallon'
          },
          defaultAudioLanguage: 'en'
        }
      },
      {
        kind: 'youtube#video',
        etag: 'urbz6h6HvfzGHhzZPnXI4hGkXzE',
        id: 'ioNng23DkIM',
        snippet: {
          publishedAt: '2020-06-26T08:58:14Z',
          channelId: 'UCOmHUn--16B90oW2L6FRR3A',
          title: 'BLACKPINK - \'How You Like That\' M/V',
          // tslint:disable-next-line: max-line-length
          description: 'BLACKPINK - \'How You Like That\'\n\n보란 듯이 무너졌어\n바닥을 뚫고 저 지하까지\n옷 끝자락 잡겠다고\n저 높이 두 손을 뻗어봐도\n\n다시 캄캄한 이곳에 light up the sky\n네 두 눈을 보며 I’ll kiss you goodbye\n실컷 비웃어라 꼴좋으니까\n이제 너희 하나 둘 셋\n\nHa how you like that?\nYou gon’ like that that that that that\nHow you like that?\nHow you like that that that that that\n\nNow look at you now look at me\nLook at you now look at me \nLook at you now look at me\n\nHow you like that\n\nNow look at you now look at me\nLook at you now look at me \nLook at you now look at me\n\nHow you like that\n\nYour girl need it all and that’s a hundred\n백 개 중에 백 내 몫을 원해\nKarma come and get some \n딱하지만 어쩔 수 없잖아\nWhat’s up, I’m right back\n방아쇠를 cock back\nPlain Jane get hijacked\nDon’t like me? Then tell me how you like that\n\n더 캄캄한 이곳에 shine like the stars\n그 미소를 띠며 I’ll kiss you goodbye\n\n실컷 비웃어라 꼴좋으니까 \n이제 너희 하나 둘 셋\n\nHa how you like that?\nYou gon’ like that that that that that\nHow you like that?\nHow you like that that that that that\n\nNow look at you now look at me\nLook at you now look at me \nLook at you now look at me\n\nHow you like that\n\nNow look at you now look at me\nLook at you now look at me \nLook at you now look at me\n\nHow you like that\n\n날개 잃은 채로 추락했던 날\n어두운 나날 속에 갇혀 있던 날\n그때쯤에 넌 날 끝내야 했어\nLook up in the sky it’s a bird it’s a plane\n\nBring out your boss bish\n\nBLACKPINK!\n\nHow you like that \nYou gon’ like that \nHow you like that \n\nMore about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttps://twitter.com/BLACKPINK\n\n#BLACKPINK #블랙핑크 #HowYouLikeThat #PreReleaseSingle #MV #20200626_6pm #OutNow #YG',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/ioNng23DkIM/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/ioNng23DkIM/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/ioNng23DkIM/hqdefault.jpg',
              width: 480,
              height: 360
            },
            standard: {
              url: 'https://i.ytimg.com/vi/ioNng23DkIM/sddefault.jpg',
              width: 640,
              height: 480
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/ioNng23DkIM/maxresdefault.jpg',
              width: 1280,
              height: 720
            }
          },
          channelTitle: 'BLACKPINK',
          tags: [
            'YG Entertainment',
            'YG',
            '와이지',
            'K-pop',
            'BLACKPINK',
            '블랙핑크',
            '블핑',
            '제니',
            '로제',
            '리사',
            '지수',
            'Lisa',
            'Jisoo',
            'Jennie',
            'Rosé',
            'BLINK',
            '블링크',
            'How You Like That',
            'BLACKPINK How You Like That',
            '블랙핑크 How You Like That',
            'HYLT',
            'BLACKPINK HYLT',
            '블랙핑크 HYLT',
            'HYLT MV',
            'How You Like That MV'
          ],
          categoryId: '10',
          liveBroadcastContent: 'none',
          localized: {
            title: 'BLACKPINK - \'How You Like That\' M/V',
            // tslint:disable-next-line: max-line-length
            description: 'BLACKPINK - \'How You Like That\'\n\n보란 듯이 무너졌어\n바닥을 뚫고 저 지하까지\n옷 끝자락 잡겠다고\n저 높이 두 손을 뻗어봐도\n\n다시 캄캄한 이곳에 light up the sky\n네 두 눈을 보며 I’ll kiss you goodbye\n실컷 비웃어라 꼴좋으니까\n이제 너희 하나 둘 셋\n\nHa how you like that?\nYou gon’ like that that that that that\nHow you like that?\nHow you like that that that that that\n\nNow look at you now look at me\nLook at you now look at me \nLook at you now look at me\n\nHow you like that\n\nNow look at you now look at me\nLook at you now look at me \nLook at you now look at me\n\nHow you like that\n\nYour girl need it all and that’s a hundred\n백 개 중에 백 내 몫을 원해\nKarma come and get some \n딱하지만 어쩔 수 없잖아\nWhat’s up, I’m right back\n방아쇠를 cock back\nPlain Jane get hijacked\nDon’t like me? Then tell me how you like that\n\n더 캄캄한 이곳에 shine like the stars\n그 미소를 띠며 I’ll kiss you goodbye\n\n실컷 비웃어라 꼴좋으니까 \n이제 너희 하나 둘 셋\n\nHa how you like that?\nYou gon’ like that that that that that\nHow you like that?\nHow you like that that that that that\n\nNow look at you now look at me\nLook at you now look at me \nLook at you now look at me\n\nHow you like that\n\nNow look at you now look at me\nLook at you now look at me \nLook at you now look at me\n\nHow you like that\n\n날개 잃은 채로 추락했던 날\n어두운 나날 속에 갇혀 있던 날\n그때쯤에 넌 날 끝내야 했어\nLook up in the sky it’s a bird it’s a plane\n\nBring out your boss bish\n\nBLACKPINK!\n\nHow you like that \nYou gon’ like that \nHow you like that \n\nMore about BLACKPINK @\nhttp://www.blackpinkofficial.com/\nhttp://www.facebook.com/BLACKPINKOFFICIAL\nhttp://www.youtube.com/BLACKPINKOFFICIAL\nhttp://www.instagram.com/BLACKPINKOFFICIAL\nhttps://twitter.com/BLACKPINK\n\n#BLACKPINK #블랙핑크 #HowYouLikeThat #PreReleaseSingle #MV #20200626_6pm #OutNow #YG'
          },
          defaultAudioLanguage: 'ko'
        }
      },
      {
        kind: 'youtube#video',
        etag: 'nasmYpCIe8-c1ITivQjxKaJ66zo',
        id: '12Fuivzgq1U',
        snippet: {
          publishedAt: '2020-06-27T08:00:12Z',
          channelId: 'UCooVYzDxdwTtGYAkcPmOgOw',
          title: 'Brawl Stars: Brawl Talk - Summer of Monsters!',
          // tslint:disable-next-line: max-line-length
          description: 'Download NOW!! ►► https://supr.cl/2K62CZG\r\nBe a BRAWLER! Subscribe!  ►►http://bit.ly/2rXFnbd\r\n\r\nFast-paced multiplayer battles from the makers of Clash of Clans, Clash Royale and Boom Beach.\r\n\r\nBattle with friends or solo across a variety of game modes in under three minutes. Unlock and upgrade dozens of powerful Brawlers with punishing super abilities. Collect unique skins to stand out and show off in the arena. Join or start a band to share tactics and fight together.\r\n\r\nBATTLE IN MULTIPLE GAME MODES\r\n- Gem Grab (3v3): Team up and out-strategize the opposing team. Collect and hold 10 gems to win, but get fragged and lose your gems.\r\n- Showdown (Solo/Duo): A battle royale style fight for survival. Collect power ups for your Brawler. Grab a friend or play solo - be the last Brawler standing in the rowdiest battle royale yet. Winner takes all!\r\n- Bounty (3v3): Take out opponents to earn stars, but don’t let them pick you off. The squad with the most stars wins the match!\r\n- Heist (3v3): Protect your team’s safe and try to crack open your opponents’. Navigate the map to sneak, blast and blow your way clear to the enemies treasure.\r\n- Brawl Ball (3v3): It\'s a whole new Brawl game! Show off your soccer/football skills and score two goals before the other team. There are no red cards here.\r\n- Special Events: Defend your safe against an unrelenting swarm of robots in Robo Rumble (PvE), or take on the big boss in Boss Fight.\r\n\r\n  \r\nSupport\r\nAre you having problems? Visit http://supercell.helpshift.com/a/brawl-stars/ or contact us in game by going to Settings to Help and Support.\r\n \r\nPrivacy Policy: \r\nhttp://supercell.com/en/privacy-policy/\r\n \r\nTerms of Service:\r\nhttp://supercell.com/en/terms-of-service/\r\n \r\nParent’s Guide:\r\nhttp://supercell.com/en/parents/',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/12Fuivzgq1U/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/12Fuivzgq1U/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/12Fuivzgq1U/hqdefault.jpg',
              width: 480,
              height: 360
            },
            standard: {
              url: 'https://i.ytimg.com/vi/12Fuivzgq1U/sddefault.jpg',
              width: 640,
              height: 480
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/12Fuivzgq1U/maxresdefault.jpg',
              width: 1280,
              height: 720
            }
          },
          channelTitle: 'Brawl Stars',
          tags: [
            'brawl stars',
            'mobile game',
            'mobile strategy game',
            'mobile rpg',
            'mobile battle royale',
            'battle royale',
            'supercell game'
          ],
          categoryId: '20',
          liveBroadcastContent: 'none',
          defaultLanguage: 'en',
          localized: {
            title: 'Brawl Stars: Brawl Talk - Summer of Monsters!',
            // tslint:disable-next-line: max-line-length
            description: 'Download NOW!! ►► https://supr.cl/2K62CZG\r\nBe a BRAWLER! Subscribe!  ►►http://bit.ly/2rXFnbd\r\n\r\nFast-paced multiplayer battles from the makers of Clash of Clans, Clash Royale and Boom Beach.\r\n\r\nBattle with friends or solo across a variety of game modes in under three minutes. Unlock and upgrade dozens of powerful Brawlers with punishing super abilities. Collect unique skins to stand out and show off in the arena. Join or start a band to share tactics and fight together.\r\n\r\nBATTLE IN MULTIPLE GAME MODES\r\n- Gem Grab (3v3): Team up and out-strategize the opposing team. Collect and hold 10 gems to win, but get fragged and lose your gems.\r\n- Showdown (Solo/Duo): A battle royale style fight for survival. Collect power ups for your Brawler. Grab a friend or play solo - be the last Brawler standing in the rowdiest battle royale yet. Winner takes all!\r\n- Bounty (3v3): Take out opponents to earn stars, but don’t let them pick you off. The squad with the most stars wins the match!\r\n- Heist (3v3): Protect your team’s safe and try to crack open your opponents’. Navigate the map to sneak, blast and blow your way clear to the enemies treasure.\r\n- Brawl Ball (3v3): It\'s a whole new Brawl game! Show off your soccer/football skills and score two goals before the other team. There are no red cards here.\r\n- Special Events: Defend your safe against an unrelenting swarm of robots in Robo Rumble (PvE), or take on the big boss in Boss Fight.\r\n\r\n  \r\nSupport\r\nAre you having problems? Visit http://supercell.helpshift.com/a/brawl-stars/ or contact us in game by going to Settings to Help and Support.\r\n \r\nPrivacy Policy: \r\nhttp://supercell.com/en/privacy-policy/\r\n \r\nTerms of Service:\r\nhttp://supercell.com/en/terms-of-service/\r\n \r\nParent’s Guide:\r\nhttp://supercell.com/en/parents/'
          },
          defaultAudioLanguage: 'en'
        }
      },
      {
        kind: 'youtube#video',
        etag: 'J7IE2bT65-3lKYUwOOFGx3P9zXk',
        id: 'Yz3mQhuMACs',
        snippet: {
          publishedAt: '2020-06-25T20:56:59Z',
          channelId: 'UC9gFih9rw0zNCK3ZtoKQQyA',
          title: 'A Message',
          description: '',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/Yz3mQhuMACs/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/Yz3mQhuMACs/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/Yz3mQhuMACs/hqdefault.jpg',
              width: 480,
              height: 360
            },
            standard: {
              url: 'https://i.ytimg.com/vi/Yz3mQhuMACs/sddefault.jpg',
              width: 640,
              height: 480
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/Yz3mQhuMACs/maxresdefault.jpg',
              width: 1280,
              height: 720
            }
          },
          channelTitle: 'JennaMarbles',
          categoryId: '23',
          liveBroadcastContent: 'none',
          defaultLanguage: 'en',
          localized: {
            title: 'A Message',
            description: ''
          }
        }
      },
      {
        kind: 'youtube#video',
        etag: 'km-zEJR-3BatVDz6HP843GZaCok',
        id: 'EY78fBRIx_Y',
        snippet: {
          publishedAt: '2020-06-27T00:51:14Z',
          channelId: 'UC3EFKdXAU99j3ppGgvTz7XQ',
          title: 'Lie Detector Test with My Sister - frustrating af',
          // tslint:disable-next-line: max-line-length
          description: 'Please give it a thumbs up and share this video! \n------------------------------------------------------------------------------\n- AFFILIATION/DISCOUNT CODES -\n\nMorphe - 10% off entire purchase\nhttps://www.morphebrushes.com\nCode: BretmanRock\n\nOfra Cosmetics\nCode: BretmanRock\nOfracosmetics.com \n\nNubounsom Lashes - 20% entire purchase\nhttps://www.nubounsom.com\nCode: Bretman \n\nLilly Lashes - 10% off entire Purchase\nhttps://www.lillylashes.com\nCode: Bretman\n\nWhite With Style - $28 for any whitening kits\nhttps://www.whitewithstyle.com\n\nLAGirlUsa.com\nCode: BretmanRock10 for 10% off\n_____________________\n\n- KEEP IN TOUCH - \n\nWebsite | BretmanRock.com\nInstagram | @Bretmanrock - http://instagram.com/bretmanrock/\nTwitter | @BretmanRock - https://twitter.com/bretmanrock\nSnapchat | @BretmanRock\nTumblr | bretmanrock.tumblr.com\nFacebook | The Bretman Rock\nTikTok | @bretmanrock\n\nEmail/Business | management@dabaddest.com',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/EY78fBRIx_Y/default.jpg',
              width: 120,
              height: 90
            },
            medium: {
              url: 'https://i.ytimg.com/vi/EY78fBRIx_Y/mqdefault.jpg',
              width: 320,
              height: 180
            },
            high: {
              url: 'https://i.ytimg.com/vi/EY78fBRIx_Y/hqdefault.jpg',
              width: 480,
              height: 360
            },
            standard: {
              url: 'https://i.ytimg.com/vi/EY78fBRIx_Y/sddefault.jpg',
              width: 640,
              height: 480
            },
            maxres: {
              url: 'https://i.ytimg.com/vi/EY78fBRIx_Y/maxresdefault.jpg',
              width: 1280,
              height: 720
            }
          },
          channelTitle: 'Bretman Rock',
          tags: [
            'bretman',
            'bretman rock',
            'funny',
            'video',
            'dabaddest'
          ],
          categoryId: '22',
          liveBroadcastContent: 'none',
          localized: {
            title: 'Lie Detector Test with My Sister - frustrating af',
            // tslint:disable-next-line: max-line-length
            description: 'Please give it a thumbs up and share this video! \n------------------------------------------------------------------------------\n- AFFILIATION/DISCOUNT CODES -\n\nMorphe - 10% off entire purchase\nhttps://www.morphebrushes.com\nCode: BretmanRock\n\nOfra Cosmetics\nCode: BretmanRock\nOfracosmetics.com \n\nNubounsom Lashes - 20% entire purchase\nhttps://www.nubounsom.com\nCode: Bretman \n\nLilly Lashes - 10% off entire Purchase\nhttps://www.lillylashes.com\nCode: Bretman\n\nWhite With Style - $28 for any whitening kits\nhttps://www.whitewithstyle.com\n\nLAGirlUsa.com\nCode: BretmanRock10 for 10% off\n_____________________\n\n- KEEP IN TOUCH - \n\nWebsite | BretmanRock.com\nInstagram | @Bretmanrock - http://instagram.com/bretmanrock/\nTwitter | @BretmanRock - https://twitter.com/bretmanrock\nSnapchat | @BretmanRock\nTumblr | bretmanrock.tumblr.com\nFacebook | The Bretman Rock\nTikTok | @bretmanrock\n\nEmail/Business | management@dabaddest.com'
          }
        }
      }
    ],
    nextPageToken: 'CAYQAA',
    pageInfo: {
      totalResults: 200,
      resultsPerPage: 6
    }
  };

  currentYear: number;
  currentSlide = 0;
  searchView = false;
  isMobileResolution: boolean;
  urlActual: any;
  nombreActual: string;
  descripcionActual: string;
  videos: Video[] = [];
  constructor(
    private sanitizer: DomSanitizer,
    private youtubeService: YoutubeService,
  ) {
  }

  ngOnInit() {
    // this.youtubeService.getListOfVideos().subscribe(data => {
    //   let resp;
    //   console.log('videos: ', data);
    //   resp = data;
    //   resp.items.forEach((video: Video) => {
    //     const myurl = 'https://www.youtube.com/embed/' + video.id;
    //     this.videos.push({
    //       etag: video.etag,
    //       id: video.id,
    //       kind: video.kind,
    //       url: myurl,
    //       snippet: video.snippet
    //     });
    //   });
    //   console.log('videos: ', this.videos);
    //   this.urlActual = this.mySecureVideo(0);
    //   this.nombreActual = this.videos[0].snippet.title;
    //   this.descripcionActual = this.videos[0].snippet.description;
    // });

    this.respuesta.items.forEach((video: Video) => {
      const myurl = 'https://www.youtube.com/embed/' + video.id;
      this.videos.push({
        etag: video.etag,
        id: video.id,
        kind: video.kind,
        url: myurl,
        snippet: video.snippet
      });
    });
    this.urlActual = this.mySecureVideo(0);
    this.nombreActual = this.videos[0].snippet.title;
    this.descripcionActual = this.videos[0].snippet.description;

    this.currentYear = new Date().getFullYear();
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  mySecureVideo(index: number) {
    console.log('secure');
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videos[index].url);
  }

  prevSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.videos.length - 1;
    } else {
      this.currentSlide -= 1;
    }
  }

  nextSlide() {
    if (this.currentSlide === this.videos.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide += 1;
    }
  }

  hideSlide(index: number) {
    return index === this.currentSlide ? false : true;
  }

  toggleVideo(indice: number) {
    console.log('toggle video');
    this.nombreActual = this.videos[indice].snippet.title;
    this.descripcionActual = this.videos[indice].snippet.description;
    this.urlActual = this.mySecureVideo(indice);
  }

  toggleSearch() {
    console.log('toggle search');
    this.searchView = !this.searchView;
  }

  searchVideo(valor) {
    console.log(valor);
    this.videos = [];
    this.youtubeService.getListOfVideos(valor).subscribe(data => {
      let resp;
      console.log('videos: ', data);
      resp = data;
      resp.items.forEach((video: Video) => {
        const myurl = 'https://www.youtube.com/embed/' + video.id.videoId;
        this.videos.push({
          etag: video.etag,
          id: video.id.videoId,
          kind: video.kind,
          url: myurl,
          snippet: video.snippet
        });
      });
      console.log('videos: ', this.videos);
      this.urlActual = this.mySecureVideo(0);
      this.nombreActual = this.videos[0].snippet.title;
      this.descripcionActual = this.videos[0].snippet.description;
    });
  }
}
