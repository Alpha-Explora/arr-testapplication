export interface AppProps {
  title?: string;
}

export function App({ title = 'test-application' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}