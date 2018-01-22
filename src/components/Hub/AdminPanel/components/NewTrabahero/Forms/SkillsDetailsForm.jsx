import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Select, DatePicker, message, Col, Row, Divider, Upload } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class TrabaheroSkillsForm extends Component {
  constructor() {
    super();
    this.state = {
      isSkillCategorySelected: false,
    }
  }

  onSelectSkillCategory = (e) => {

  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Row gutter={ 16 }>
          <h1>Skills </h1>
          <Col span={ 8 }>
            <FormItem
              label="Skill Category"
            >
            <Col span={ 16 }>
              { getFieldDecorator('skill_category', {
                rules: [{ required: true, message: 'Please choose your skill category.' }],
              })(
                <Select placeholder="Select Skill category" size="large" onChange={ this.onSelectSkillCategory }>
                <Option value="House Cleaning">House Cleaning</Option>
                <Option value="Automotive">Automotive</Option>
                <Option value="Electrical">Electrical</Option>
              </Select>
              )}
            </Col>
            </FormItem>

            <FormItem
              label="Skills"
            >
            <Col span={ 16 }>
              { getFieldDecorator('skills', {
                rules: [{ required: true, message: 'Please choose your skills.' }],
              })(
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="Please select"
                >
                  <Option value="House Cleaning">House Cleaning</Option>
                  <Option value="Automotive">Automotive</Option>
                  <Option value="Electrical">Electrical</Option>
                </Select>
              )}
            </Col>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedTrabaheroSkillsForm = Form.create()(TrabaheroSkillsForm)
export default WrappedTrabaheroSkillsForm;
