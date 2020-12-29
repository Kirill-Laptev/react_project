import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus сomponent", () => { 
  test("Status from props should be in the local state", () => { 
    const component = create(<ProfileStatus status='samurai' />); 
    const instance = component.getInstance(); 
    expect(instance.state.status).toBe('samurai'); 
  });

  test("After creation <span> should be displayed", () => { 
    const component = create(<ProfileStatus status='samurai' />); 
    const root = component.root;
    let span = root.findByType('span');
    expect(span.innerText).not.toBeNull(); 
  });

  test("After creation <input> shouldn't be displayed", () => { 
    const component = create(<ProfileStatus status='samurai' />); 
    const root = component.root;
    expect(() => {
      let input = root.findByType('input');
    }).toThrow();
  });

  test("After creation <span> should be contains correct status", () => { 
    const component = create(<ProfileStatus status='samurai' />); 
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe('samurai')
  });

  test("<input> should be displayed in editMode instead of <span>", () => { 
    const component = create(<ProfileStatus status='samurai' />); 
    const root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick()
    let input = root.findByType('input');
    expect(input.props.value).toBe('samurai')
  });
});