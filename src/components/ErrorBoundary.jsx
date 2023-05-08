import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Обновляем состояние, чтобы следующий рендер покажет запасной UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Логируем ошибку
    console.error(error, errorInfo)
    // Обновляем состояние компонента, чтобы отобразить сообщение об ошибке
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      // Отображаем сообщение об ошибке
      return <h1>Что-то пошло не так.</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
