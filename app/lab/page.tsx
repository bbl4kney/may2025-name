"use client";
export default function LabPage() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div>
          {/* 1 */}
          <input type="text" />
          <p>username</p>
          <input type="text" name="pw" id="#" />
          <p>password</p>
        </div>
        <div>
          {/* 2 */}
        </div>
        <div>
          {/* 3 */}
        </div>
        <div>
          {/* 4 */}
        </div>
        <div>
          {/* 5 */}
        </div>
        <div className="col-start-2">6</div>
        <div className="col-start-2 row-start-3">7</div>
        <div className="col-start-2 row-start-4">8</div>
        <div className="col-start-4 row-start-2">9</div>
        <div className="col-start-4 row-start-3">10</div>
        <div className="col-start-4 row-start-4">11</div>
      </div>
    </>
  );
}
