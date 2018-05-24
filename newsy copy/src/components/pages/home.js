import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'

import { map } from 'ramda'

const styles = theme => ({
  root: {
    marginTop: '56px',
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
})

const li = article => (
  <ListItem key={article.url} button>
    <Avatar>TC</Avatar>
    <ListItemText primary={article.title} secondary={article.publishedAt} />
  </ListItem>
)

export default withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <List>{map(li, results().articles)}</List>
  </div>
))

function results() {
  return {
    status: 'ok',
    totalResults: 10,
    articles: [
      {
        source: {
          id: 'techcrunch',
          name: 'TechCrunch'
        },
        author: 'Natasha Lomas',
        title: 'Instapaper on pause in Europe to fix GDPR compliance "issue"',
        description:
          'Remember Instapaper? The Pinterest-owned, read-it-later bookmarking service is taking a break in Europe — apparently while it works on achieving compliance with the region’s updated privacy framework, GDPR, which will start being applied from tomorrow. Instap…',
        url:
          'https://techcrunch.com/2018/05/24/instapaper-on-pause-in-europe-to-fix-gdpr-compliance-issue/',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2018/05/15387752895_aa116a5c7d_k.jpg?w=710',
        publishedAt: '2018-05-24T09:03:32Z'
      },
      {
        source: {
          id: 'techcrunch',
          name: 'TechCrunch'
        },
        author: 'Danny Crichton',
        title:
          'The national security implications of Chinese venture capitalists are overblown',
        description:
          'Washington — as Washington does — is barreling towards a new reform plan designed to protect American innovation from overseas investors (which should really just be read as the Chinese these days). Earlier this week, congressional committees passed a measure…',
        url:
          'https://techcrunch.com/2018/05/24/the-national-security-implications-of-chinese-venture-capitalists-are-overblown/',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2018/05/gettyimages-158933416.jpg?w=599',
        publishedAt: '2018-05-24T08:21:32Z'
      },
      {
        source: {
          id: 'techcrunch',
          name: 'TechCrunch'
        },
        author: 'Ingrid Lunden',
        title:
          'Adyen confirms an IPO in Amsterdam, valuing the payments giant at $7B-$11B',
        description:
          'The floodgates are definitely open for IPOs in the tech world right now, and the latest is coming out of Europe. Adyen, a company that powers payments for large and smaller e-commerce merchants and others, has said that it plans to publicly list on the Eurone…',
        url: 'https://techcrunch.com/2018/05/24/adyen-payments-ipo/',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2017/07/gettyimages-172457963.jpg?w=716',
        publishedAt: '2018-05-24T08:18:28Z'
      },
      {
        source: {
          id: 'techcrunch',
          name: 'TechCrunch'
        },
        author: 'Leslie Hitchcock',
        title: 'Disrupt Berlin 2-for-1 passes go live next week: Sign up today',
        description:
          'Achtung, meine Damen und Herren! Dust off your German, hop on a plane, a train or the Autobahn and join us, along with thousands of tech founders, makers, innovators, investors and early-stage startups, at Disrupt Berlin 2018 on November 29-30. Better yet, jo…',
        url:
          'https://techcrunch.com/2018/05/24/disrupt-berlin-2-for-1-passes-go-live-next-week-sign-up-today/',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2018/04/tc_disrupt_social_fb2.jpg?w=764',
        publishedAt: '2018-05-24T08:03:56Z'
      },
      {
        source: {
          id: 'techcrunch',
          name: 'TechCrunch'
        },
        author: "Steve O'Hear",
        title:
          'Klevio launches its smart intercom and app that lets you open doors remotely',
        description:
          'Klevio, a smart home startup out of the U.K., is officially launching its first product: a smart intercom system that lets you control your front door lock via an iOS and Android app on your phone and remotely. Dubbed “Klevio One,” the device is designed to b…',
        url: 'https://techcrunch.com/2018/05/24/klevio/',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2018/05/klevio-app-and-device-1.jpg?w=600',
        publishedAt: '2018-05-24T08:00:30Z'
      },
      {
        source: {
          id: 'techcrunch',
          name: 'TechCrunch'
        },
        author: 'Ingrid Lunden',
        title:
          'Microsoft and Publicis unveil Marcel, an AI-based productivity platform for the ad giant',
        description:
          'Microsoft under CEO Satya Nadella has refocussed to double down on enterprise, artificial intelligence and cloud services, and today the company took the wraps a new project for advertising giant Publicis that shows how it is leveraging all three to expand it…',
        url:
          'https://techcrunch.com/2018/05/24/microsoft-and-publicis-unveil-marcel-an-ai-based-productivity-platform-for-the-ad-giant/',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2018/05/img_4579.jpg?w=533',
        publishedAt: '2018-05-24T07:27:35Z'
      },
      {
        source: {
          id: 'techcrunch',
          name: 'TechCrunch'
        },
        author: 'Samantha Stein',
        title:
          'Announcing the 15 companies competing in Startup Battlefield Europe',
        description:
          'TechCrunch scoured all of Europe to find the most innovative and disruptive early-stage startups to launch at TechCrunch Startup Battlefield Europe 2018 at VivaTech. And today starting at 9:05 am CET on the TechCrunch homepage you can watch the pitches from t…',
        url:
          'https://techcrunch.com/2018/05/24/announcing-the-15-companies-competing-in-startup-battlefield-europe/',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2018/02/vivatech-paris-bf-post-graphic.png?w=600',
        publishedAt: '2018-05-24T07:00:16Z'
      },
      {
        source: {
          id: 'techcrunch',
          name: 'TechCrunch'
        },
        author: 'Jonathan Shieber',
        title:
          "Executives from Israel's entrants into the flying car business are landing on our stage in Tel Aviv",
        description:
          'Of all of the visions of the future that have been rolled out over the years, perhaps none have had as persistent a hold on the imagination as flying cars (well… maybe jetpacks… But flying cars are right up there). As these technologies move from the realms o…',
        url:
          'https://techcrunch.com/2018/05/24/executives-from-israels-entrants-into-the-flying-car-business-are-landing-on-our-stage-in-tel-aviv/',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2016/12/flyigncar.jpg?w=672',
        publishedAt: '2018-05-24T07:00:02Z'
      },
      {
        source: {
          id: 'techcrunch',
          name: 'TechCrunch'
        },
        author: 'Jon Russell',
        title:
          "Go-Jek officially announces Southeast Asia expansion to fill void left by Uber's exit",
        description:
          'There’s good news for consumers in Southeast Asia who are feeling the void after Uber left the region. That’s because Go-Jek, the Indonesia-based ride-hailing company backed by Google, Tencent and others, has officially announced plans to move into four new m…',
        url:
          'https://techcrunch.com/2018/05/23/go-jek-officially-announces-southeast-asia-expansion/',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2017/08/go-jek.jpg?w=540',
        publishedAt: '2018-05-24T06:10:03Z'
      },
      {
        source: {
          id: 'techcrunch',
          name: 'TechCrunch'
        },
        author: 'Romain Dillet',
        title: 'Revolut adds Ripple and Bitcoin Cash support',
        description:
          'Fintech startup Revolut is adding Bitcoin Cash and Ripple to its cryptocurrency feature. While cryptocurrency isn’t really Revolut’s focus point, it’s a good way to get started with cryptocurrencies. If you have a Revolut account, you can now buy and hold Bit…',
        url:
          'https://techcrunch.com/2018/05/23/revolut-adds-ripple-and-bitcoin-cash-support/',
        urlToImage:
          'https://techcrunch.com/wp-content/uploads/2017/12/in-conversation-with-tom-blomfield-monzo-valentin-stalf-n26-and-nikolay-storonsky-revolut0268.jpg?w=600',
        publishedAt: '2018-05-24T05:01:06Z'
      }
    ]
  }
}
