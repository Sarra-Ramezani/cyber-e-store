export default function Breadcrumbs() {
  return (
    <>
      {/* <ul className="flex flex-row gap-4">
        {breadcrumbsList.map((breadcrumb) => {
          if (breadcrumb.index != 0) {
            <div>
              <li>
                <a href={breadcrumb.href}>{breadcrumb.name}</a>
              </li>
              <span>;&gt</span>
            </div>;
          } else {
            <div>
              <li>
                <a href={breadcrumb.href}>{breadcrumb.name}</a>
              </li>
            </div>;
          }
        })}
      </ul> */}

      <ul className="text-[#A4A4A4] flex flex-row gap-4 font-medium text-lg">
        <li>
          <a href="/">Home</a>
        </li>
        <span>&gt;</span>
        <li>
          <a href="/">Catalog</a>
        </li>
        <span>&gt;</span>
        <li>
          <a href="/">Smartphones</a>
        </li>
      </ul>
    </>
  );
}
