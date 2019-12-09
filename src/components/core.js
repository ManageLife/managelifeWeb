import React from 'react'
import { COLORS } from 'config/styling'

const Header = (props, { className }) => (
   <header style={className ? {} : styles.header}>{props.children}</header>
)

const Footer = (props, { className }) => {
   console.log('Footer: ', props.className)
   return (
      <footer style={className ? {} : styles.footer}>{props.children}</footer>
   )
}

const Main = (props, { className }) => (
   <main style={className ? {} : styles.main}>{props.children}</main>
)

const Section = (props, { className }) => (
   <section style={className ? {} : styles.section}>{props.children}</section>
)

const Aside = (props, { className }) => (
   <aside style={className ? {} : styles.aside}>{props.children}</aside>
)

const Article = (props, { className }) => (
   <article style={className ? {} : styles.article}>{props.children}</article>
)

const styles = {
   header: {
      textAlign: 'center',
      padding: '0 1vw',
      height: 'auto',
   },
   main: {
      justifySelf: 'center',
      alignSelf: 'center',
      textAlign: 'center',
   },
   footer: {
      //position: 'absolute',
      //right: 0,
      //bottom: 0,
      //left: 0,
      //padding: '0.15rem',
      //backgroundColor: COLORS.someColor,
      //textAlign: 'center',
      //justifySelf: 'center',
      //alignSelf: 'center',
   },
   section: {},
   aside: {},
   article: {},
}

export { Header, Footer, Main, Section, Aside, Article }
