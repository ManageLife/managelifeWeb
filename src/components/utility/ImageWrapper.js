import React from 'react'

function ImageWrapper({ image, style }) {
   const [attrIsShown, setAttrIsShown] = React.useState(false)
   const toggleAttrIsShown = bool => setAttrIsShown(bool)
   const { source, attribution, altText } = image
   return (
      <span style={styles.span}>
         <img
            onMouseEnter={() => toggleAttrIsShown(true)}
            onMouseLeave={() => toggleAttrIsShown(false)}
            src={source}
            alt={altText}
            style={style}
         />
         {attrIsShown && (
            <p style={styles.attribution}>Source: {attribution}</p>
         )}
      </span>
   )
}

const styles = {
   span: {
      display: {},
   },

   attribution: {
      fontSize: '8px',
      color: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      bottom: '1px',
      right: '1px',
      zIndex: 1,
      paddingRight: '8px',
   },
}

export { ImageWrapper }
