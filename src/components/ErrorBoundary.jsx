import React from 'react';
import { Button } from './ui/Button';
import { AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#0B1220] flex items-center justify-center p-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-md text-center backdrop-blur-xl">
                        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
                        <p className="text-gray-400 mb-6">
                            We encountered an unexpected error. Please try refreshing the page.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button
                                variant="ghost"
                                onClick={() => window.location.reload()}
                            >
                                Refresh Page
                            </Button>
                            <Button
                                variant="primary"
                                onClick={() => this.setState({ hasError: false })}
                            >
                                Try Again
                            </Button>
                        </div>
                        {process.env.NODE_ENV === 'development' && (
                            <div className="mt-8 text-left bg-black/50 p-4 rounded text-xs font-mono text-red-300 overflow-auto max-h-40">
                                {this.state.error?.toString()}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
