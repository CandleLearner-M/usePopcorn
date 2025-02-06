type NumResultsProps = {
  resultsCount: number;
};
export function NumResults({ resultsCount }: NumResultsProps) {
  return (
    <p>
      Found
      <strong> {resultsCount} </strong>
      results
    </p>
  );
}
