import React from 'react'
// https://blog.bitsrc.io/understanding-error-boundaries-in-react-e58f15ae1f38
class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props)
      this.state = { hasError: false }
   }
   static getDerivedStateFromError(error) {
      return { hasError: true }
   }
   componentDidCatch(error, info) {
      console.log(error, info)
   }
   render() {
      if (this.state.hasError) {
         return <h1>Something went wrong.</h1>
      }
      return this.props.children
   }
}

export { ErrorBoundary }
