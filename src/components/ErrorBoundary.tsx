import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught Error in Component Tree:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-stone-50 p-6 text-center">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-stone-200 shadow-xl flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl font-bold mb-4">
              AZ
            </div>
            <h1 className="text-xl font-bold text-stone-900 mb-2 font-display">
              Azenza - Carga de Aplicación
            </h1>
            <p className="text-sm text-stone-600 mb-6 font-medium leading-relaxed">
              Estamos actualizando los datos en tiempo real. Por favor recarga para continuar navegando.
            </p>
            <button
              onClick={this.handleReset}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-sm transition-all shadow-lg active:scale-95"
            >
              Recargar Aplicación
            </button>
            {this.state.error?.message && (
              <p className="mt-4 text-[10px] text-stone-400 font-mono break-all max-w-full">
                {this.state.error.message}
              </p>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
