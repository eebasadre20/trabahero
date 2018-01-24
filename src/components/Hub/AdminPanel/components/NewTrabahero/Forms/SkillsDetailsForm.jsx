import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Select, DatePicker, message, Col, Row, Divider, Upload, Rate } from 'antd';
import './SkillsForm.css';

const FormItem = Form.Item;
const Option = Select.Option;

class TrabaheroSkillsForm extends Component {
  constructor() {
    super();
    this.state = {
      isSkillCategorySelected: false,
      skillsSelected: [],
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    debugger;
  }

  onSelectSkillCategory = (e) => {
    this.setState({
      isSkillCategorySelected: !this.state.isSkillCategorySelected
    });
  }

  onSelectSkills = (skills) => {
   this.setState({
     skillsSelected: skills
   });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 6,
          offset: 18,
        },
      },
    };

    const skillsRatePanel = this.state.skillsSelected.map( skill => (
      <FormItem>
          { getFieldDecorator('skill_rate', {
            rules: [{ required: true, message: 'Please rate your skills.' }]
          })(
            <Row>
              <Col span={ 8 }>{ skill }</Col>
              <Col span={ 16 }><Rate /></Col>
            </Row>
          )}
      </FormItem>
    ));

    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Row gutter={ 16 }>
          <h1>Skills </h1>
          <Col span={ 8 }>
            <FormItem
              label="Skill Category"
            >
            <Col span={ 24 }>
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
            <Col span={ 24 }>
              { getFieldDecorator('skills', {
                rules: [{ required: true, message: 'Please choose your skills.' }],
              })(
                <Select
                  mode="multiple"
                  placeholder="Select skill based on the category choosen"
                  size="large"
                  disabled={ !this.state.isSkillCategorySelected }
                  onChange={ this.onSelectSkills }
                >
                  <Option value="House Cleaning">House Cleaning</Option>
                  <Option value="Automotive">Automotive</Option>
                  <Option value="Electrical">Electrical</Option>
                  <Option value="Plumber">Plumber</Option>
                  <Option value="Mechanic">Mechanic</Option>
                </Select>
              )}
            </Col>
            </FormItem>
          </Col>
          <Col span={ 2 }></Col>
          <Col span={ 14 }>
            { skillsRatePanel }
          </Col>
        </Row>

        <Row>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" size="large" htmlType="submit">Submit</Button>
          </FormItem>
        </Row>
      </Form>
    );
  }
}

const WrappedTrabaheroSkillsForm = Form.create()(TrabaheroSkillsForm)
export default WrappedTrabaheroSkillsForm;
