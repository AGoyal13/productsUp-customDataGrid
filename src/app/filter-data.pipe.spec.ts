import { tableData } from './data/data';
import { FilterDataPipe } from './filter-data.pipe';

describe('FilterDataPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterDataPipe();
    expect(pipe).toBeTruthy();
  });
  it ("should return first 10 elements of input array", ()=>{
    const pipe = new FilterDataPipe();
    let data = pipe.transform(Object.values(tableData), 1, 10);
    expect(data.length).toEqual(10);
    expect(data[data.length -1].id).toEqual(10);
    expect(data[0].id).toEqual(1);
  })
});
