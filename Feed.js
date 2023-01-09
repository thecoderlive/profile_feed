import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'


const Feed = () => (
<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
<Text style={styles.profile_text}>{item.profile_text}</Text>
<Image
    style={styles.share_icon}
    source={{uri: item.share_icon}}
   />
<Image
    style={styles.setting_icon}
    source={{uri: item.setting_icon}}
   />
<Image
    style={styles.profile_icon}
    source={{uri: item.profile_icon}}
   />
<Text style={styles.name}>{item.name}</Text>
<Text style={styles.profile_id}>{item.profile_id}</Text>
<Text style={styles.total_text}>{item.total_text}</Text>
<Text style={styles.total}>{item.total}</Text>
<Text style={styles.average_text}>{item.average_text}</Text>
<Text style={styles.average}>{item.average}</Text>
<Image
    style={styles.location_icon}
    source={{uri: item.location_icon}}
   />
<Text style={styles.addres}>{item.addres}</Text>
<Text style={styles.ful_add}>{item.ful_add}</Text>
<Image
    style={styles.right_arrow}
    source={{uri: item.right_arrow}}
   />
<Image
    style={styles.language_icon}
    source={{uri: item.language_icon}}
   />
<Text style={styles.language_text}>{item.language_text}</Text>
<Text style={styles.lang_qwerty}>{item.lang_qwerty}</Text>
<Image
    style={styles.visit_language}
    source={{uri: item.visit_language}}
   />
<Image
    style={styles.log_out_icon}
    source={{uri: item.log_out_icon}}
   />
<Text style={styles.log_out_text}>{item.log_out_text}</Text>
<Image
    style={styles.visit_logout}
    source={{uri: item.visit_logout}}
   />
</ScrollView>
)

export default Feed;

const styles = StyleSheet.create({
profile_text: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
share_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
setting_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
profile_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
name: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
profile_id: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
total_text: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
total: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
average_text: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
average: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
location_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
addres: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
ful_add: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
right_arrow: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
language_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
language_text: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
lang_qwerty: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
visit_language: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
log_out_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
log_out_text: {
    color: 'hsl(274,100%,60%)',
    fontSize: 15,
    fontWeight: '400',
    paddingHorizontal: 10,
    paddingTop: 5
  },
visit_logout: {
    width: '10vw',
    height: '10vw',
    margin: 5
  }
});